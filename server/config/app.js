'use strict';

/**
 * Module dependencies.
 */
let config = require('./config'),
  express = require('express'),
  path = require('path'),
  logger = require('morgan'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser'),
  routesApi = require('../routes/index'),
  validator = require('express-validator'),
  constant = require('../const/siteconst');

module.exports.start = function start() {
  let app = express();

  // view engine setup
  app.set('views', path.join(appRoot, config.views_folder));
  app.set('view engine', 'jade');

  app.use(logger(config.log.format));
  app.use(bodyParser.json({ limit: "5mb" }));
  app.use(bodyParser.urlencoded({ extended: true, limit: "5mb" }));

  //Use express validator
  app.use(validator());
  app.use(cookieParser());

  // Add headers
  app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'access-control-allow-credentials, access-control-allow-headers, access-control-allow-methods, access-control-allow-origin, content-type, X-ACCESS_TOKEN, Authorization, x-requested-with');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
  });

  app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
  // Use the API routes when path starts with /api
  app.use('/api', routesApi());

  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // error handlers

  // [SH] Catch unauthorised errors
  app.use(function (err, req, res, next) {
    console.log(err);
    if (err.name === 'UnauthorizedError') {
      res.status(401);
      res.json({ "message": err.name + ": " + err.message });
    } else if (err.name === 'permission_denied') {
      res.status(401);
      res.json({ "message": err.name + ": " + err.message });
    }
  });

  // development error handler
  // will print stacktrace
  if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err
      });
    });
  }

  // production error handler
  // no stacktraces leaked to user
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
  });

  let cronjob = require('./crontab')(app);

  // App listen
  let server = app.listen(config.port);
  console.log("Magic happen on port " + config.port);
};

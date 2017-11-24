'use strict';

/**
 * Module dependencies.
 */
var path = require('path');
global.appRoot = path.resolve(__dirname);

var app = require('./config/app');
var start = app.start();

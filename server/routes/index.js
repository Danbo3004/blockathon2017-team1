'use strict';
var express = require('express');
var constant = require('../const/siteconst');
var router = express.Router();
var models  = require('../models');

const Op = models.Sequelize.Op;

module.exports = function () {

  router.get('/homes', function(req, res) {
    models.Home.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.like]: '%' + req.query.keyword + '%' } },
          { description: { [Op.like]: '%' + req.query.keyword + '%' } },
          { streetAddress: { [Op.like]: '%' + req.query.keyword + '%' } }
        ]
      }
    }).then(function(homes) {
      res.send(homes)
    });
  });

  module.exports = router;
  return router;
};

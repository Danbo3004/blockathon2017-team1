'use strict';
var express = require('express');
var constant = require('../const/siteconst');
var router = express.Router();

module.exports = function () {

  var ctrlFaceRecognize = require('../controllers/recognize');

  router.post('/enroll', ctrlFaceRecognize.enroll);
  module.exports = router;
  return router;
};

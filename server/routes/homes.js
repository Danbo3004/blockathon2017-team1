var models  = require('../models');
var express = require('express');
var router  = express.Router();

const Op = models.Sequelize.Op;

router.get('/homes', function(req, res) {
  models.Home.getAll({
    where: {
      [Op.or]: [
        { name: { [Op.like]: '%' + req.query.keyword + '%' } },
        { description: { [Op.like]: '%' + req.query.keyword + '%' } },
        { streetAddress: { [Op.like]: '%' + req.query.keyword + '%' } }
      ]
    }
  }).then(function() {
    res.redirect('/');
  });
});

module.exports = router;

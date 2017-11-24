/**
 * Created by orbhealth on 11/10/16.
 */
// Cronjob
var CronJob = require('cron').CronJob;
var util = require('../helper/util');
// Define the Socket.io configuration method
module.exports = function (app) {
  var cronjob = new CronJob('*/60 * * * * *', function () {
    console.log('You will see this message every minutes xx');

  }, null, true, 'America/Los_Angeles');

  return cronjob;
};

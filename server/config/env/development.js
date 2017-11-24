'use strict';

var defaultEnvConfig = require('./default');

module.exports = {
    log: {
        format: 'dev',
    },
    app: {
        title: defaultEnvConfig.app.title + ' - Development Environment'
    },
    firebase: {
        api_key : 'AIzaSyC6qjoweM6N-wIUGprxIcfF2Vqj96HgCig',
        host: 'https://salesforce-3e649.firebaseio.com/'
    },
    mailer: {
        from: process.env.MAILER_FROM || 'MAILER_FROM',
        options: {
            service: process.env.MAILER_SERVICE_PROVIDER || 'MAILER_SERVICE_PROVIDER',
            auth: {
                user: process.env.MAILER_EMAIL_ID || 'MAILER_EMAIL_ID',
                pass: process.env.MAILER_PASSWORD || 'MAILER_PASSWORD'
            }
        }
    }
};

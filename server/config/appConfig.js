'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash');
var path = require('path');

/**
 * Initialize global configuration
 */
var initGlobalConfig = function () {

    if (typeof process.env.NODE_ENV === 'undefined') {
        process.env.NODE_ENV = 'development';
    }
    // Get the default config
    var defaultConfig = require(path.join(appRoot, '/config/env/default'));

    // Get the current config
    var environmentConfig = require(path.join(appRoot, '/config/env/', process.env.NODE_ENV)) || {};

    // Merge config files
    var config = _.merge(defaultConfig, environmentConfig);

    return config;
};

/**
 * Set configuration object
 */
module.exports = initGlobalConfig();
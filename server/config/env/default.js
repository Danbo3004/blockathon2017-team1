'use strict';

module.exports = {
    app: {
        title: 'Transformation AI',
        description: 'RP data',
        keywords: 'express, angular 2 js, node.js, mysql, passport'
    },
    port: 3000,
    logo: 'modules/core/client/img/brand/logo.png',
    favicon: './public/favicon.ico',
    views_folder: 'views',
    public_folder: 'public',
    client_folder: 'app_client',
    uploads: {
        profileUpload: {
            dest: './uploads/', // Profile upload destination path
            limits: {
                fileSize: 1*1024*1024 // Max file size in bytes (1 MB)
            }
        }
    }
};

'use strict';

module.exports = {
    app: {
        title: 'C2C Proof of Concept',
        description: 'Ride sharing decentralized app',
        keywords: 'express, angular x js, node.js, postgrl, blockchain, etherum'
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

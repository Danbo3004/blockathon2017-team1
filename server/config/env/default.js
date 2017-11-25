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
  },
  networkUrl: 'http://www.blockathon.asia:8545',
  homeContractEventAbi: [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_bookDataHash",
          "type": "bytes32"
        },
        {
          "name": "_cancelledAt",
          "type": "uint256"
        }
      ],
      "name": "cancel",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_bookDataHash",
          "type": "bytes32"
        },
        {
          "name": "_startDate",
          "type": "uint256"
        },
        {
          "name": "_duration",
          "type": "uint256"
        }
      ],
      "name": "book",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_guests",
          "type": "uint256"
        },
        {
          "name": "_bed",
          "type": "uint256"
        },
        {
          "name": "_bedroom",
          "type": "uint256"
        },
        {
          "name": "_bathroom",
          "type": "uint256"
        }
      ],
      "name": "updateCapacity",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_bookDataHash",
          "type": "bytes32"
        },
        {
          "name": "_checkoutAt",
          "type": "uint256"
        }
      ],
      "name": "checkout",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_bookDataHash",
          "type": "bytes32"
        },
        {
          "name": "_message",
          "type": "string"
        }
      ],
      "name": "requireResolve",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_name",
          "type": "string"
        },
        {
          "name": "_description",
          "type": "string"
        },
        {
          "name": "_streetAddress",
          "type": "string"
        },
        {
          "name": "_price",
          "type": "uint256"
        }
      ],
      "name": "updateInfo",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_bookDataHash",
          "type": "bytes32"
        },
        {
          "name": "_checkinAt",
          "type": "uint256"
        }
      ],
      "name": "checkin",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_internet",
          "type": "bool"
        },
        {
          "name": "_kitchen",
          "type": "bool"
        },
        {
          "name": "_iron",
          "type": "bool"
        },
        {
          "name": "_hangers",
          "type": "bool"
        }
      ],
      "name": "updateFeature",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "caller",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_name",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "_description",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "_streetAddress",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "_price",
          "type": "uint256"
        }
      ],
      "name": "UpdateInfo",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "caller",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_guests",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "_bed",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "_bedroom",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "_bathroom",
          "type": "uint256"
        }
      ],
      "name": "UpdateCapacity",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "caller",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_internet",
          "type": "bool"
        },
        {
          "indexed": false,
          "name": "_kitchen",
          "type": "bool"
        },
        {
          "indexed": false,
          "name": "_iron",
          "type": "bool"
        },
        {
          "indexed": false,
          "name": "_hangers",
          "type": "bool"
        }
      ],
      "name": "UpdateFeature",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "caller",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_bookDataHash",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "_startDate",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "_duration",
          "type": "uint256"
        }
      ],
      "name": "Book",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "caller",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_bookDataHash",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "_cancelledAt",
          "type": "uint256"
        }
      ],
      "name": "Cancel",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "caller",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_bookDataHash",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "_checkinAt",
          "type": "uint256"
        }
      ],
      "name": "Checkin",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "caller",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_bookDataHash",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "_checkoutAt",
          "type": "uint256"
        }
      ],
      "name": "Checkout",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "caller",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_bookDataHash",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "_message",
          "type": "string"
        }
      ],
      "name": "RequireResolve",
      "type": "event"
    }
  ],
  homeContractEventAddress: '0x01a1F5F6Dc5AB93A2E3c1af3CA85e768dAA228d9'
};

'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('HomeFeatures', {
      contractAddress: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.TEXT,
        references: {
          model: "Homes",
          key: "contractAddress"
        }
      },
      internet: {
        type: Sequelize.BOOLEAN
      },
      kitchen: {
        type: Sequelize.BOOLEAN
      },
      iron: {
        type: Sequelize.BOOLEAN
      },
      hangers: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('HomeFeatures');
  }
};
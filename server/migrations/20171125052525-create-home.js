'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Homes', {
      contractAddress: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.TEXT
      },
      name: {
        type: Sequelize.TEXT
      },
      description: {
        type: Sequelize.TEXT
      },
      streetAddress: {
        type: Sequelize.TEXT
      },
      guests: {
        type: Sequelize.INTEGER
      },
      bedroom: {
        type: Sequelize.INTEGER
      },
      bed: {
        type: Sequelize.INTEGER
      },
      bathroom: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('Homes');
  }
};

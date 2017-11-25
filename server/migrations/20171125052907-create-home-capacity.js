'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('HomeCapacities', {
      contractAddress: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.TEXT,
        references: {
          model: "Homes",
          key: "contractAddress"
        }
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
    return queryInterface.dropTable('HomeCapacities');
  }
};
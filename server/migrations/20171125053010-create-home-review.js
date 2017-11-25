'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('HomeReviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      contractAddress: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.TEXT,
        references: {
          model: "Homes",
          key: "contractAddress"
        }
      },
      commenter: {
        type: Sequelize.TEXT
      },
      rate: {
        type: Sequelize.INTEGER
      },
      message: {
        type: Sequelize.TEXT
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
    return queryInterface.dropTable('HomeReviews');
  }
};

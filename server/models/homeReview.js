'use strict';
module.exports = (sequelize, DataTypes) => {
  var HomeReview = sequelize.define('HomeReview', {
    contractAddress: DataTypes.TEXT,
    commenter: DataTypes.TEXT,
    rate: DataTypes.INTEGER,
    message: DataTypes.TEXT
  });

  HomeReview.associate = function(models) {
    HomeReview.belongsTo(models.Home, {
      onDelete: "CASCADE",
      foreignKey: "contractAddress",
      targetKey: "contractAddress"
    });
  };

  return HomeReview;
};

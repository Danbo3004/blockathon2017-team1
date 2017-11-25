'use strict';
module.exports = (sequelize, DataTypes) => {
  var Home = sequelize.define('Home', {
    contractAddress: DataTypes.TEXT,
    name: DataTypes.TEXT,
    description: DataTypes.TEXT,
    address: DataTypes.TEXT,
    isAvailable: DataTypes.BOOLEAN,
  });

  Home.associate = function(models) {
    Home.hasOne(models.HomeCapacity);
    Home.hasOne(models.HomeFeature);
    Home.hasMany(model.HomeReview);
  };

  return Home;
};

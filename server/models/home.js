'use strict';
module.exports = (sequelize, DataTypes) => {
  var Home = sequelize.define('Home', {
    contractAddress: DataTypes.TEXT,
    owner: DataTypes.TEXT,
    name: DataTypes.TEXT,
    description: DataTypes.TEXT,
    price: DataTypes.TEXT,
    streetAddress: DataTypes.TEXT,
    guests: DataTypes.INTEGER,
    bedroom: DataTypes.INTEGER,
    bed: DataTypes.INTEGER,
    bathroom: DataTypes.INTEGER,
    internet: DataTypes.BOOLEAN,
    kitchen: DataTypes.BOOLEAN,
    iron: DataTypes.BOOLEAN,
    hangers: DataTypes.BOOLEAN
  });

  Home.associate = function(models) {
    Home.hasMany(models.HomeBooking);
    Home.hasMany(models.HomeReview);
  };

  return Home;
};

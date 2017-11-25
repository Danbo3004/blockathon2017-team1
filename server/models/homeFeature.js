'use strict';
module.exports = (sequelize, DataTypes) => {
  var HomeFeature = sequelize.define('HomeFeature', {
    contractAddress: DataTypes.TEXT,
    internet: DataTypes.BOOLEAN,
    kitchen: DataTypes.BOOLEAN,
    iron: DataTypes.BOOLEAN,
    hangers: DataTypes.BOOLEAN,
  });

  HomeFeature.associate = function(models) {
    HomeFeature.belongsTo(models.Home, {
      onDelete: "CASCADE",
      foreignKey: "contractAddress",
      targetKey: "contractAddress"
    });
  };

  return HomeFeature;
};

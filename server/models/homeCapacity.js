'use strict';
module.exports = (sequelize, DataTypes) => {
  var HomeCapacity = sequelize.define('HomeCapacity', {
    contractAddress: DataTypes.TEXT,
    guest: DataTypes.INTEGER,
    bedroom: DataTypes.INTEGER,
    bed: DataTypes.INTEGER,
    bathroom: DataTypes.INTEGER
  });

  HomeCapacity.associate = function(models) {
    HomeCapacity.belongsTo(models.Home, {
      onDelete: "CASCADE",
      foreignKey: "contractAddress",
      targetKey: "contractAddress"
    });
  };

  return HomeCapacity;
};

'use strict';
module.exports = (sequelize, DataTypes) => {
  var HomeBooking = sequelize.define('HomeBooking', {
    contractAddress: DataTypes.STRING,
    startDate: DataTypes.INTEGER,
    duration: DataTypes.INTEGER
  });

  HomeBooking.associate = function(models) {
    HomeBooking.belongsTo(models.Home, {
      onDelete: "CASCADE",
      foreignKey: "contractAddress",
      targetKey: "contractAddress"
    });
  };

  return HomeBooking;
};

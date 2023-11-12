const { DataTypes, BOOLEAN } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "sede",
    {
        title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mobile: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lat: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lng: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      img: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      estado: {
        type: BOOLEAN
      }
    },
    {
      timestamps: false,
    }
  );
};

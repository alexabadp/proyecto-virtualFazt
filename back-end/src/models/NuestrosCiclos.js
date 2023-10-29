const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "ciclo",
    {
      // id: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      //   primaryKey: true,
      // },
      idUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subtitle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      titleresume: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      resumen: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      duracion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      temario: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      timestamps: false,
    }
  );
};

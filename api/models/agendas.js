'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Agendas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Agendas.belongsTo(models.Usuarios)
      Agendas.belongsTo(models.Servicos)
      Agendas.belongsTo(models.Especialistas)
    }
  };
  Agendas.init({
    data_hora: DataTypes.DATE,
    observacao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Agendas',
  });
  return Agendas;
};
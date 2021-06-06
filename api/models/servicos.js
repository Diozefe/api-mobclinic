'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Servicos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Servicos.hasMany(models.Agendas,{
        foreignKey:'servico_id'
      })
    }
  };
  Servicos.init({
    nome: DataTypes.STRING,
    duracao: DataTypes.INTEGER,
    descricao: DataTypes.STRING,
    modalidade: DataTypes.STRING,
    preco: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Servicos',
  });
  return Servicos;
};
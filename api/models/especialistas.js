'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Especialistas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Especialistas.hasMany(models.Agendas,{
        foreignKey:'especialista_id'
      })
      Especialistas.belongsTo(models.Permissoes,{
        foreignKey:'permissao_id'
      })
    }
  };
  Especialistas.init({
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    data_nascimento: DataTypes.DATEONLY,
    especialidade:DataTypes.STRING,
    contato1: DataTypes.STRING,
    contato2: DataTypes.STRING,
    email: DataTypes.STRING,
    endereco: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    bairro: DataTypes.STRING,
    cidade: DataTypes.STRING,
    uf: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Especialistas',
  });
  return Especialistas;
};
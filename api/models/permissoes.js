'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Permissoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Permissoes.hasOne(models.Usuarios,{
        foreignKey:'permissao_id'
      })
      Permissoes.hasOne(models.Especialistas,{
        foreignKey:'permissao_id'
      })
    }
  };
  Permissoes.init({
    criar_atendimento: DataTypes.BOOLEAN,
    confirmar_agenda: DataTypes.BOOLEAN,
    especialista: DataTypes.BOOLEAN,
    gerencia: DataTypes.BOOLEAN,
    adm: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Permissoes',
  });
  return Permissoes;
};
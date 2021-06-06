'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Usuarios.hasMany(models.Anamnesias,{
        foreignKey:'usuario_id'
      })
      Usuarios.hasMany(models.Agendas,{
        foreignKey:'usuario_id'
      })
      Usuarios.belongsTo(models.Permissoes,{
        foreignKey:'permissao_id'
      })
    }
  };
  Usuarios.init({
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    data_nascimento: DataTypes.DATEONLY,
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
    modelName: 'Usuarios',
  });
  return Usuarios;
};
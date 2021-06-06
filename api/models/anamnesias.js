'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Anamnesias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Anamnesias.belongsTo(models.Usuarios,{
        foreignKey:'usuario_id'
      })
    }
  };
  Anamnesias.init({
    alergia: DataTypes.STRING,
    cirurgia: DataTypes.STRING,
    cicatriz: DataTypes.STRING,
    verruga_pinta: DataTypes.STRING,
    neoplasia: DataTypes.STRING,
    problema_ocular: DataTypes.STRING,
    cor_pele: DataTypes.STRING,
    cor_cabelo: DataTypes.STRING,
    cor_olhos: DataTypes.STRING,
    cor_pelos: DataTypes.STRING,
    acido: DataTypes.STRING,
    doencas: DataTypes.STRING,
    observacao: DataTypes.STRING,
    aprova_procedimento: DataTypes.BOOLEAN,
    autoriza_imagem: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Anamnesias',
  });
  return Anamnesias;
};
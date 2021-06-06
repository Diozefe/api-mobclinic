'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Anamnesias', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      alergia: {
        type: Sequelize.STRING
      },
      cirurgia: {
        type: Sequelize.STRING
      },
      cicatriz: {
        type: Sequelize.STRING
      },
      verruga_pinta: {
        type: Sequelize.STRING
      },
      neoplasia: {
        type: Sequelize.STRING
      },
      problema_ocular: {
        type: Sequelize.STRING
      },
      cor_pele: {
        type: Sequelize.STRING
      },
      cor_cabelo: {
        type: Sequelize.STRING
      },
      cor_olhos: {
        type: Sequelize.STRING
      },
      cor_pelos: {
        type: Sequelize.STRING
      },
      acido: {
        type: Sequelize.STRING
      },
      doencas: {
        type: Sequelize.STRING
      },
      observacao: {
        type: Sequelize.STRING
      },
      aprova_procedimento: {
        type: Sequelize.BOOLEAN
      },
      autoriza_imagem: {
        type: Sequelize.BOOLEAN
      },
      usuario_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{model:'Usuarios', key:'id'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Anamnesias');
  }
};
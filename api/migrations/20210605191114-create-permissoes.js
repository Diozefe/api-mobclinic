'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Permissoes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      criar_atendimento: {
        type: Sequelize.BOOLEAN
      },
      confirmar_agenda: {
        type: Sequelize.BOOLEAN
      },
      especialista: {
        type: Sequelize.BOOLEAN
      },
      gerencia: {
        type: Sequelize.BOOLEAN
      },
      adm: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Permissoes');
  }
};
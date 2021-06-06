'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Agendas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data_hora: {
        allowNull: false,
        type: Sequelize.DATE
      },
      observacao: {
        type: Sequelize.STRING
      },
      usuario_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{model:'Usuarios', key:'id'}
      },
      servico_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{model:'Servicos', key:'id'}
      },
      especialista_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{model:'Especialistas', key:'id'}
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
    await queryInterface.dropTable('Agendas');
  }
};
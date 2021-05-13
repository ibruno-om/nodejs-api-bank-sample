'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('customers', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cpf_cnpj: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
      },
      bank_code: {
        type: Sequelize.STRING,
        allowNull: false
      },
      agency: {
        type: Sequelize.STRING,
        allowNull: false
      },
      agency_digit: {
        type: Sequelize.STRING
      },
      account: {
        type: Sequelize.STRING,
        allowNull: false
      },
      account_digit: {
        type: Sequelize.STRING
      },
      account_type: {
        type: Sequelize.ENUM({
          values: ['CONTA_CORRENTE', 'CONTA_POUPANCA', 'CONTA_FACIL']
        }),
        allowNull: false,   
      },
      status: {
        type: Sequelize.ENUM({
          values: ['VALIDADO', 'RASCUNHO']
        }),
        allowNull: false,        
      },
      created_at: {
        type: Sequelize.DATE, 
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE, 
        allowNull: false,
      }
      
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('customers');
  }
};

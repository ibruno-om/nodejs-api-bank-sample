const { factory } = require('factory-girl');
const { Customer } = require("../../src//app/models")
const faker = require("faker-br")

factory.define('Customer', Customer, {
  name: faker.name.findName(), 
  cpf_cnpj: faker.br.cpf(), 
  bank_code: '001',
  email: faker.internet.email(),
  agency: '0001', 
  agency_digit: '0', 
  account: faker.finance.account(), 
  account_digit: '0', 
  account_type: 'CONTA_CORRENTE', 
  status: 'RASCUNHO'
});

module.exports = factory;
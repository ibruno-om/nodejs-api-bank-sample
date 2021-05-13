const request = require("supertest");

const app = require("../../src/app");
const truncate = require('../utils/truncate')
const factory = require("../utils/factories")
const faker = require("faker-br")

describe('CustomerController : CRUD Operations', () => {  
  beforeEach(async () => {
    await truncate();
  });

  it('should create a customer with valid params', async () => {
    const validData = {
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
    }    

    const response = await request(app)
      .post("/customer")
      .send(validData);
    
    expect(response.status).toBe(200);
  });

  it('should update a customer with valid params and valid id', async () => {
    const customer = await factory.create("Customer");  

    const validData = {
      name: faker.name.findName()
    }

    const response = await request(app)
      .put("/customer/" + customer.id)
      .send(validData);    

    expect(response.status).toBe(200);
  });

  it('should delete a customer with valid id', async () => {
    const customer = await factory.create("Customer");  

    const response = await request(app)
      .delete("/customer/" + customer.id)
      .send();    

    expect(response.status).toBe(200);
  });

  it('should list paginate customers', async () => {
    const customers = await factory.createMany("Customer", 10);

    const response = await request(app)
      .get("/customer/")
      .send({
        page: 0
      })

    expect(response.status).toBe(200);    
  });

  it('should show a customers with valid id', async () => {
    const customer = await factory.create("Customer");

    const response = await request(app)
      .get("/customer/" + customer.id)
      .send()

    expect(response.status).toBe(200);    
  });

});
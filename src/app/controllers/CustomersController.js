const { Customer } = require("../models")

class CustomerController {

  async index(req, res) {
    try {
      const page = req.page || 0;

      const customers = await Customer.findAll( { offset: page, limit: 10 } )

      return res.status(200).send(customers);
    } catch (error) {
      return res.status(401).send({ message: 'Error to list customers'});
    }
  }

  async show(req, res) {
    try {

      const id = req.params.id;

      let customer = await Customer.findOne({ where: { id } })      

      if (!customer)
        return res.status(401).send({ message: "Customer not found" });  

      return res.status(200).send(customer);
    } catch (error) {
      return res.status(401).send({ message: 'Error to show customer'});
    }
  }

  // Create new Customer
  async create(req, res) {
    try {    
      const { name, cpf_cnpj, 
        bank_code, email,
        agency, agency_digit, 
        account, account_digit, 
        account_type, status } = req.body;                  

      const customer = await Customer.create( { 
        name, cpf_cnpj, 
        bank_code, email,
        agency, agency_digit, 
        account, account_digit, 
        account_type, status } );

      return res.status(200).send(customer);
    } catch (error) {      
      console.log(error);
      return res.status(401).send({ message: 'Error to create customer'});
    }    
  }

  // Update a Customer
  async update(req, res) {
    try {    
      const { name, cpf_cnpj, 
        agency, agency_digit, 
        account, account_digit, 
        account_type, status } = req.body;                        

      const id = req.params.id;

      let customer = await Customer.findOne({ where: { id } })      

      if (!customer)
        return res.status(401).send({ message: "Customer not found" });  

      await customer.update({ 
        name, cpf_cnpj, 
        agency, agency_digit, 
        account, account_digit, 
        account_type, status 
      });

      return res.status(200).send(customer);
    } catch (error) {           
      return res.status(401).send({ message: 'Error to update customer'});
    }    
  }

  async destroy (req, res) {
    try {

      const id = req.params.id;

      let customer = await Customer.findOne({ where: { id } })      

      if (!customer)
        return res.status(401).send({ message: "Customer not found" });  

      Customer.destroy({ where: { id } })
      
      return res.status(200).send({ message: 'Customer with id ' + id + ' has been deleted'});
    } catch (error) {
      return res.status(401).send({ message: 'Error to destroy customer'});
    }
  }

}

module.exports = new CustomerController();
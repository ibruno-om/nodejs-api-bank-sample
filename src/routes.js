const routes = require('express').Router();
const CustomerController = require("./app/controllers/CustomersController");
const { customerValidationRules, validateCustomer } = require('./app/middleware/customerValidator')

routes
  .get("/customer", CustomerController.index)
  .get("/customer/:id", CustomerController.show)
  .post("/customer", customerValidationRules(), validateCustomer, CustomerController.create)
  .put("/customer/:id", CustomerController.update)
  .delete("/customer/:id", CustomerController.destroy);

module.exports = routes;
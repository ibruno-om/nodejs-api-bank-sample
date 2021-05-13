const { check, oneOf, body, checkSchema, validationResult } = require('express-validator')

const customerValidationRules = () => {
  return checkSchema({
    agency: {
      isLength: {
        options: { max: 4 }
      },
      notEmpty: true,
      custom: {
        options: (value, { req }) => {
          console.log("validou")
          return /^(?:^0*)[1-9][0-9]{0,3}$/.test(value)
        }
      }      
    },
    agency_digit: {
      notEmpty: true,
      custom: {
        options: (value, { req }) => {
          return /^[xX0-9]{0,1}$/.test(value)
        }
      }
    },
    account: {
      isLength: {
        options: { max: 8 }
      },
      notEmpty: true,
      custom: {
        options: (value, { req }) => {
          return /^(?:^0*)[1-9][0-9]{0,7}$/.test(value)
        }
      }
    },
    account_digit: {
      notEmpty: true,
      custom: {
        options: (value, { req }) => {
          return /^[xX0-9]{0,1}$/.test(value)
        }
      }      
    },
    accountType: {
      notEmpty: true,
      in: ['CONTA_CORRENTE', 'CONTA_POUPANCA', 'CONTA_FACIL']
    }
  })
}

const validateCustomer = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

  return res.status(422).json({
    errors: extractedErrors,
  })
}

module.exports = { customerValidationRules, validateCustomer }
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    name: {
     type: DataTypes.STRING,
     allowNull: false,
     validate: {
       notEmpty: true
     }
    },
    cpf_cnpj: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,      
      validate: {
        isEmail: true
      }
    },
    bank_code: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    agency: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    agency_digit: DataTypes.STRING,
    account: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    account_digit: DataTypes.STRING,
    account_type: { 
      type: DataTypes.ENUM({
        values: ['CONTA_CORRENTE', 'CONTA_POUPANCA', 'CONTA_FACIL']
      }),
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    status: { 
      type: DataTypes.ENUM({
        values: ['VALIDADO', 'RASCUNHO']
      }),      
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    createdAt: {
      type: DataTypes.DATE      
    },
    updatedAt: {
      type: DataTypes.DATE
    }
  });
  
  return Customer;
};
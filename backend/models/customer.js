const { Model, DataTypes } = require('sequelize');

class Customer extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        branch_id: DataTypes.INTEGER,
        contact_info: DataTypes.STRING,
        payment_status: DataTypes.STRING,
        dues: DataTypes.DECIMAL,
      },
      {
        sequelize,
        modelName: 'Customer',
      }
    );
  }
}

module.exports = Customer;

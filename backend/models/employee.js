const { Model, DataTypes } = require('sequelize');

class Employee extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        role: DataTypes.STRING,
        branch_id: DataTypes.INTEGER,
        salary: DataTypes.DECIMAL,
        contact_info: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'Employee',
      }
    );
  }
}

module.exports = Employee;

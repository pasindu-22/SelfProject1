const { Model, DataTypes } = require('sequelize');

class Vehicle extends Model {
  static init(sequelize) {
    super.init(
      {
        branch_id: DataTypes.INTEGER,
        type: DataTypes.STRING,
        availability_status: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'Vehicle',
      }
    );
  }
}

module.exports = Vehicle;

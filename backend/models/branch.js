const { Model, DataTypes } = require('sequelize');

class Branch extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        location: DataTypes.STRING,
        contact_info: DataTypes.STRING,
        admin_id: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: 'Branch',
      }
    );
  }
}

module.exports = Branch;

const { Model, DataTypes } = require('sequelize');

class Admin extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        role_id: {
          type: DataTypes.INTEGER,
          references: {
            model: 'Roles', // refers to table name
            key: 'id',
          },
        },
      },
      {
        sequelize,
        modelName: 'Admin',
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.Role, { foreignKey: 'role_id' });
  }
}

module.exports = Admin;
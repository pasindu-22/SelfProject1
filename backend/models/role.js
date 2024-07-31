// backend/models/role.js
const { Model, DataTypes } = require('sequelize');

class Role extends Model {
  static init(sequelize) {
    super.init(
      {
        role_name: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'Role',
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Admin, { foreignKey: 'role_id' });
  }
}

module.exports = Role;

const { Model, DataTypes } = require('sequelize');

class Revenue extends Model {
  static init(sequelize) {
    super.init(
      {
        branch_id: DataTypes.INTEGER,
        total_revenue: DataTypes.DECIMAL,
        revenue_date: DataTypes.DATE,
      },
      {
        sequelize,
        modelName: 'Revenue',
      }
    );
  }
}

module.exports = Revenue;

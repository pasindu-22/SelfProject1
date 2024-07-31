// Initialize all models and set up relationships

const Sequelize = require('sequelize');
const sequelize = require('../config/config');

const Admin = require('./admin');
const Branch = require('./branch');
const Customer = require('./customer');
const Employee = require('./employee');
const Revenue = require('./revenue');
const Vehicle = require('./vehicle');
const Role = require('./role');

// Initialize models
Admin.init(sequelize);
Branch.init(sequelize);
Customer.init(sequelize);
Employee.init(sequelize);
Revenue.init(sequelize);
Vehicle.init(sequelize);
Role.init(sequelize);

// Set up relationships
Admin.hasMany(Branch, { foreignKey: 'admin_id' });
Branch.belongsTo(Admin, { foreignKey: 'admin_id' });

Branch.hasMany(Employee, { foreignKey: 'branch_id' });
Employee.belongsTo(Branch, { foreignKey: 'branch_id' });

Branch.hasMany(Customer, { foreignKey: 'branch_id' });
Customer.belongsTo(Branch, { foreignKey: 'branch_id' });

Branch.hasMany(Vehicle, { foreignKey: 'branch_id' });
Vehicle.belongsTo(Branch, { foreignKey: 'branch_id' });

Branch.hasMany(Revenue, { foreignKey: 'branch_id' });
Revenue.belongsTo(Branch, { foreignKey: 'branch_id' });

Role.hasMany(Admin, { foreignKey: 'role_id' });
Admin.belongsTo(Role, { foreignKey: 'role_id' });
module.exports = {
  Admin,
  Branch,
  Customer,
  Employee,
  Revenue,
  Vehicle,
  Role,
  sequelize,
}; 

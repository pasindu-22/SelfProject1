// backend/controllers/adminController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Admin, Role, Branch } = require('../models');


// Register a new admin
exports.register = async (req, res) => {
    try {
      const { name, email, password, role_id } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const newAdmin = await Admin.create({ name, email, password: hashedPassword, role_id });
      res.status(201).json(newAdmin);
    } catch (error) {
      res.status(500).json({ error: 'Error registering admin' });
    }
  };
  

// Log in an admin
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ where: { email } });
    if (!admin || !await bcrypt.compare(password, admin.password)) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    const token = jwt.sign({ id: admin.admin_id, role: admin.role_id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Error logging in' });
  }
};


// Create a new admin
exports.createAdmin = async (req, res) => {
  try {
    const { name, email, password, role_name } = req.body;

    // Find or create the role
    const [role, created] = await Role.findOrCreate({
      where: { role_name },
    });

    // Create admin
    const admin = await Admin.create({
      name,
      email,
      password,
      role_id: role.id,
    });

    res.status(201).json(admin);
  } catch (error) {
    console.error('Error creating admin:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


// Get all managers
exports.managers = async (req, res) => {
  try {
    const managers = await Admin.findAll();
    res.json(managers);
    console.log("managers");
  } catch (error) {
    res.status(500).json({ error: 'Error recieving' });
  }
};

// Get all branches
exports.branches = async (req, res) => {
  try {
    const branches = await Branch.findAll();
    res.json(branches);
    console.log("branches"); 
  } catch (error) {
    res.status(500).json({ error: 'Error recieving' });
  }
};

// Create a new branch
exports.createBranch = async (req, res) => {
  try {
    const { name, location, contact_info, admin_id } = req.body;

    console.log(req.body);
    // Find or create the role
    const [admin, created] = await Admin.findOrCreate({
      where: { id: admin_id },
    });

    // Create branch
    const branch = await Branch.create({
      name,
      location,
      contact_info,
      admin_id: admin.id,
    });

    res.status(201).json(branch);
  } catch (error) {
    console.error('Error creating branch:', error);
    res.status(500).json({ message: 'Internal server error' });
  } 
};
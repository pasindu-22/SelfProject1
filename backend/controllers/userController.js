// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

const { Customer } = require('../models');



exports.createCustomer = async (req, res) => {
    try {
      const { name, branch_id, contact_info } = req.body;
  
      // Validate input
      if (!name || !branch_id || !contact_info) {
        return res.status(400).json({ message: 'All fields are required' });
      }
  
      // Create a new customer
      const newCustomer = await Customer.create({
        branch_id,
        name,
        contact_info
      });
  
      res.status(201).json(newCustomer);
    } catch (error) {
      console.error('Error creating customer:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };


// module.exports = {
//   register,
//   login,
//   createCustomer, // Add this line to export the createCustomer method
// };


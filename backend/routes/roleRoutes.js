// backend/routes/roleRoutes.js

const express = require('express');
const router = express.Router();
const { Role } = require('../models'); // Import the Role model
express.json();


// Create a new role
router.post('/create', async (req, res) => {
  try {
    const { role_name } = req.body;
    const role = await Role.create({ role_name });
    console.log(role_name);
    res.status(201).json(role);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create role' });
  }
});

// Get all roles
router.get('/', async (req, res) => {
  try {
    const roles = await Role.findAll();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch roles' });
  }
});

// Get a specific role by ID
router.get('/:id', async (req, res) => {
  try {
    const role = await Role.findByPk(req.params.id);
    if (role) {
      res.status(200).json(role);
    } else {
      res.status(404).json({ error: 'Role not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch role' });
  }
});

// Update a role
router.put('/:id', async (req, res) => {
  try {
    const { role_name } = req.body;
    const role = await Role.findByPk(req.params.id);
    if (role) {
      role.role_name = role_name;
      await role.save();
      res.status(200).json(role);
    } else {
      res.status(404).json({ error: 'Role not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update role' });
  }
});

// Delete a role
router.delete('/:id', async (req, res) => {
  try {
    const role = await Role.findByPk(req.params.id);
    if (role) {
      await role.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Role not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete role' });
  }
});

module.exports = router;

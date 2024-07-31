const express = require('express');
const adminController = require('../controllers/adminController'); // Adjust the path as necessary
const router = express.Router();

// Register, login, and create an admin
router.post('/register', adminController.register);
router.post('/login', adminController.login);
router.post('/createAdmin',adminController.createAdmin);
router.get('/managers',adminController.managers);
// router.post('/createBranch',adminController.createBranch);

module.exports = router;
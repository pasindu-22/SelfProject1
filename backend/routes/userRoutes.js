const express = require('express');
const userController = require('../controllers/userController'); // Adjust the path as necessary
const router = express.Router();


router.post('/createCustomer',userController.createCustomer);

module.exports = router;
 
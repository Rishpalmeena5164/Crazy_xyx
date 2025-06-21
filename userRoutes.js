const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/profile/:id', userController.profile);
router.post('/wallet/deposit', userController.deposit);
router.post('/wallet/withdraw', userController.withdraw);

module.exports = router;
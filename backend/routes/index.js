const express = require('express');
const storeController = require('../controllers/storeController');
const userController = require('../controllers/userController');

const router = express.Router();

// Home
router.get('/', storeController.store);
// Specific store
router.get('/store/:id', storeController.getStore);
// Add store
router.get('/add', storeController.store);
router.post('/add', storeController.createStore);
// Login
router.get('/login', userController.user);
router.post('/login', userController.createUser);

module.exports = router;

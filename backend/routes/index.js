const express = require('express');
const storeController = require('../controllers/storeController');

const router = express.Router();

router.get('/', storeController.addStore); // should show most popular stores
router.get('/add', storeController.addStore);
router.post('/add', storeController.createStore);

module.exports = router;

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('it works yeahhhh');
});

router.get('/reviews', (req, res) => {
  res.send('this is the coffee review page');
});

module.exports = router;

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('it works yeahhhh');
});

module.exports = app;

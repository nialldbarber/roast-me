const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.user = async (req, res) => {
  await User.find()
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json(`Error: ${err}`));
};

exports.createUser = (req, res) => {
  const { username, email, password } = req.body;

  const newUser = new User({ username, email, password });

  newUser
    .save()
    .then(() => res.json('User added!'))
    .catch((err) => res.status(500).json(`Error: ${err}`));
};

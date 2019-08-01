const Store = require('../models/store');

exports.addStore = (req, res) => {
  Store.find()
    .then(stores => res.json(stores))
    .catch(err => res.status(400).json(`Error: ${err}`));
};

exports.createStore = (req, res) => {
  const { name, slug, description, tags } = req.body;

  const newStore = new Store({ name, slug, description, tags });

  newStore
    .save()
    .then(() => res.json('Store added!'))
    .catch(err => res.status(400).json(`💩🔥☹️ Error: ${err}`));
};

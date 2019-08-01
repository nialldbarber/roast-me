const Store = require('../models/store');

exports.store = (req, res) => {
  Store.find()
    .then(stores => res.json(stores))
    .catch(err => res.status(400).json(`Error: ${err}`));
};

exports.getStore = (req, res) => {
  Store.findById(req.params.id)
    .then(store => res.json(store))
    .catch(err => res.status(400).json(`Error: ${err}`));
};

exports.createStore = (req, res) => {
  const { name, slug, description, tags } = req.body;

  const newStore = new Store({ name, slug, description, tags });

  newStore
    .save()
    .then(() => res.json('Store added!'))
    .catch(err => res.status(400).json(`Error: ${err}`));
};

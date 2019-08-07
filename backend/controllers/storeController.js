const Store = require('../models/store');

exports.store = async (req, res) => {
  await Store.find()
    .then(stores => res.json(stores))
    .catch(err => res.status(400).json(`Error: ${err}`));
};

exports.getStore = async (req, res) => {
  await Store.findById(req.params.id)
    .then(store => res.json(store))
    .catch(err => res.status(400).json(`Error: ${err}`));
};

exports.createStore = (req, res) => {
  const { name, slug, description, rating, tags } = req.body;

  const newStore = new Store({ name, slug, description, rating, tags });

  newStore
    .save()
    .then(() => res.json('Store added!'))
    .catch(err => res.status(400).json(`Error: ${err}`));
}; 

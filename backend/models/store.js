const mongoose = require('mongoose');
const slug = require('slugs');

const { Schema } = mongoose;

const storeSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please enter a store name',
  },
  slug: String,
  description: {
    type: String,
    trim: true,
  },
  tags: [String],
});

storeSchema.pre('save', function(next) {
  if (!this.isModified('name')) {
    return next();
  }
  this.slug = slug(this.name);
  next();
});

const Store = mongoose.model('Store', storeSchema);

module.exports = Store;

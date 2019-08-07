const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config({ path: '.env' });

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const { connection } = mongoose;
connection.once('open', () => {
  console.error(`================================================
  Mongoose database connection established! 😎
================================================`);
});

// Import models
require('./models/store');
require('./models/user');

// Start the app
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config({ path: '.env' });

// Connect to database
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.connection.on('error', err => {
  console.error(`👎👎👎 ➡️ ${err.message}`);
});

// Start the app
app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});

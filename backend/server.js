const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

// TODO: Implement middleware
const cors = require('cors');
app.use(cors());

mongoose.connect('mongodb://localhost:XXXXX/logify', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// TODO: Update route once established
app.get('/', (req, res) => {
  res.send('Welcome to Logify!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

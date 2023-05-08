const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();
require('dotenv').config()


const groceriesRoutes = require('./routes/groceries');

const uri = process.env.MONGO_DB_URI

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error(err));

// Set up middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

// Static files
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home')
})

// Use routes
app.use('/groceries', groceriesRoutes);



// Start the server
const PORT = process.env.PORT || 4500;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

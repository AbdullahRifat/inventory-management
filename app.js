const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

mongoose.connect('mongodb://127.0.0.1:27017/inventoryDB')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const productRoutes = require('./routes/productRoutes');
app.use('/products', productRoutes);

app.get('/', (req, res) => {
  res.redirect('/products');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

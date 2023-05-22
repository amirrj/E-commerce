const express = require('express');
const productRoutes = require('./routes/productRoutes');

const app = express();

app.use('/api/products', productRoutes);

app.get('/', (req, res, next) => res.json({message: "Server Online"}))

app.listen(4000);
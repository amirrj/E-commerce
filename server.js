const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const productRoutes = require('./routes/productRoutes');

const app = express();

mongoose.connect(process.env.DB_LINK).then(() => console.log('DB Online')).catch(err => console.log(err));

app.use('/api/products', productRoutes);

app.get('/', (req, res, next) => res.json({message: "Server Online"}))

app.listen(process.env.PORT);
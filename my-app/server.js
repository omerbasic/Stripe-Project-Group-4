const express = require('express');
require('dotenv').config('.env');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(express.static('public'))

app.listen(3000, () => console.log('Server is running on port 4000'))
/* 

NOTES TILL GROUP:
To start both servers use the commando
npm start

*/

const express = require('express');
require('dotenv').config('.env');
const { createCheckoutSession } = require('./controllers/payment.controller')


const app = express();


// ENDPOINTS FOR API HERE

// Session
app.post("/api/checkout-session", createCheckoutSession);
// app.get("/api/checkout-session", getCheckoutSession);

// Order
// app.post("/api/order", createOrder);

// CORS - CROSS ORIGIN RESOUCE SHARING ????
app.post("/test", (req, res) => {
  console.log('successs')
  res.status(201).json({ message: 'success' })
})



app.listen(4000, () => console.log('Server is running on port 4000'))
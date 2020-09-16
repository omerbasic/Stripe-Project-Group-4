/* 

NOTES TILL GROUP:
To start both servers use the commando
npm start

*/
const fs =require("fs");
const express = require('express');
require('dotenv').config('.env');
const { createCheckoutSession, verifyOrder } = require('./controllers/payment.controller')


const app = express();
app.use(express.json())




// Session
app.post("/api/checkout-session", createCheckoutSession);
// app.get("/api/checkout-session", getCheckoutSession);
app.post("/api/verifysession", verifyOrder);
// Order
// app.post("/api/order", createOrder);

// CORS - CROSS ORIGIN RESOUCE SHARING ????
app.post("/success", (req, res) => {
  console.log('successs')
  res.status(201).json({ message: 'success' })
})



app.listen(4000, () => console.log('Server is running on port 4000'))
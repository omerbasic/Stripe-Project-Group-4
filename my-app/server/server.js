/* 

NOTES TILL GROUP:
To start both servers use the commando
npm start

*/
const fs =require("fs");
const express = require('express');
require('dotenv').config('.env');
const { createCheckoutSession } = require('./controllers/payment.controller')


const app = express();
app.use(express.json())

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
app.get("/success",(req,res)=>{
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('./public/success.html').pipe(res)
})

app.get("/cancel",(req,res)=>{
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('./public/cancel.html').pipe(res)
})



app.listen(4000, () => console.log('Server is running on port 4000'))
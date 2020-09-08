const express = require('express');
require('dotenv').config('.env');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const path = require('path')
import Products from './src/components/Products';
import CartItem from './src/components/context/cartProvider';


const app = express();

// I am trying to serve the whole React app as static file
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
  })




// ENDPOINTS FOR SESSION HERE

app.post("/create-checkout-session", async (req, res) => {



    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        // Here we have to send clonedCart[] as body
      ],
      mode: "payment",
      success_url: "https://example.com/success",
      cancel_url: "https://example.com/cancel",
    });
  
    res.json({ id: session.id });
  });  



app.listen(4000, () => console.log('Server is running on port 4000'))
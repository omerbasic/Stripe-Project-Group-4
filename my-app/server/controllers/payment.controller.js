const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const fs = require('fs');


async function verifyOrder(req, res){
  /* console.log("products" + req.body) */
  try {
    const session = await stripe.checkout.sessions.retrieve(req.body.id)
      if (session.payment_status=="paid" ){

          res.json({verified: true})
          console.log(req.body)
          fs.appendFileSync('./orders.json',JSON.stringify (req.body))
          console.log(session)  
          } else {
            res.json({verified: false}) 
          }
  } catch (error) {
    console.log(error)
    res.json({verified: false}) 
  }
}

// stripe.charges.create(body, (stripeErr, stripeRes) => {
//   if (stripeErr) {
//   console.error(stripeErr) 
//   res.status(500).send({ error: stripeErr.raw });
//   } else {
//   // Save cartItems to file
//   fs.appendFileSync('./orders.json',JSON.stringify (req.body), (err) => {
//   if (err) {
  
//   }

// fs.writeFile('./orders.json', jsonString, err => {
//   if (err) {
//       console.log('Error writing file', err)
//   } else {
//       console.log('Successfully wrote file')
//   }
// })

async function createCheckoutSession(req, res) {
   /*  console.log(req.body) */
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: req.body,
      mode: "payment",
      success_url: "http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "http://localhost:3000/checkout?cancelled=true",

      

    });
   
    res.json({ id: session.id });
    
}



module.exports = {
    createCheckoutSession,
    verifyOrder,
}


// const session = await stripe.checkout.sessions.retrieve(
//   'cs_test_XgkDFYjtELk10xQnzCTPkxOy98Kz81eJTX4cKt9scNQDM05DLdKy5v5D'
// );

// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

// const sessions = await stripe.checkout.sessions.list({
//   limit: 3,
// });


// const jsonString = JSON.stringify(session, null, 2)

// fs.writeFile('./orders.json', jsonString, err => {
//   if (err) {
//       console.log('Error writing file', err)
//   } else {
//       console.log('Successfully wrote file')
//   }
// })
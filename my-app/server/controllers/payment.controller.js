const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

async function verifyOrder(req, res){

  const session = await stripe.checkout.sessions.retrieve(
  req.body


  
);



}
async function createCheckoutSession(req, res) {
    console.log(req.body)
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
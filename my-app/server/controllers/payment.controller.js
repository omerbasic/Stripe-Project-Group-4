const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const fs = require('fs');
const { exit } = require('process');


async function verifyOrder(req, res){
  
  try {
    const existingOrdersRaw = await fs.readFileSync('./orders.json', "utf8")
    //1 läs in, 
    //2 kolla om det finns en array, annars skapa array och pusha order, finns det en array kolla om req.body.id existerar pusha ifall den inte existerar
  
    let existingOrders = [];
    if(existingOrdersRaw.length){
      existingOrders = JSON.parse(existingOrdersRaw)
      const foundOrder = existingOrders.find(order => order.sessionId == req.body.id)
      if (foundOrder){
        res.json({verified: false}) 
        return;
      }

    }
    const session = await stripe.checkout.sessions.retrieve(req.body.id)
      if (session.payment_status=="paid" ){


        const completedOrder = await stripe.checkout.sessions.listLineItems(session.id)
        completedOrder.sessionId = req.body.id
        existingOrders.push(completedOrder)
        await fs.writeFileSync('./orders.json', JSON.stringify(existingOrders, null, 2))

        res.json({verified: true})
          
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
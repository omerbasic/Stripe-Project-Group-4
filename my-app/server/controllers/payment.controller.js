const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


async function createCheckoutSession(req, res) {
    console.log(req.body)
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: req.body,
      mode: "payment",
      success_url: "http://localhost:4000/success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "http://localhost:4000/cancel?session_id={CHECKOUT_SESSION_ID}",
    });
   
    res.json({ id: session.id });
}

module.exports = {
    createCheckoutSession,
}
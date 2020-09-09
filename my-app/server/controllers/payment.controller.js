const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


async function createCheckoutSession(req, res) {
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
}

module.exports = {
    createCheckoutSession,
}
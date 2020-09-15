const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


async function createCheckoutSession(req, res, body) {
    console.log("hej")
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "T-shirt",
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Shorts",
            },
            unit_amount: 2000,
          },
          quantity: 3,
        }
        // Here we have to send clonedCart[] as body
      ],
      mode: "payment",
      success_url: "http://localhost:4000/success",
      cancel_url: "http://localhost:4000/cancel",
    });
  
    res.json({ id: session.id });
}

module.exports = {
    createCheckoutSession,
}
import { PREMIUM_SUBSCRIPTION_AMOUNT } from "@/lib/constants"

// This is your test secret API key.
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

const calculateOrderAmount = (items: any) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return PREMIUM_SUBSCRIPTION_AMOUNT
}

export default async function handler(req, res) {
  const { items } = req.body

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  })

  res.send({
    clientSecret: paymentIntent.client_secret,
  })
}
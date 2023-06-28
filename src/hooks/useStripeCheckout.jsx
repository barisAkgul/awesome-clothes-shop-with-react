import { useState } from "react";
import getStripe from "@helpers/functions/stripe";

const useStripeCheckout = (shoppingCart) => {
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const item = shoppingCart.map((cartItem) => {
    return {
      price: cartItem.id,
      quantity: cartItem.quantity,
    };
  });

  const redirectToCheckout = async () => {
    setLoading(true);

    const stripe = await getStripe();

    try {
      const session = await stripe.redirectToCheckout({
        lineItems: item,
        mode: "payment",
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}`,
      });

      if (session.error) {
        console.error("Stripe checkout error:", session.error);
        setStripeError(session.error.message);
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
      setStripeError("An error occurred. Please try again later.");
    }

    setLoading(false);
  };

  return { stripeError, isLoading, redirectToCheckout };
};

export default useStripeCheckout;

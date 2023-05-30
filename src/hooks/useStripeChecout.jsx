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

  const checkoutOptions = {
    lineItems: item,
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`,
  };

  const redirectToCheckout = async () => {
    setLoading(true);
    console.log("redirectToCheckout");

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);

    if (error) setStripeError(error.message);
    setLoading(false);
  };

  return { stripeError, isLoading, redirectToCheckout };
};

export default useStripeCheckout;

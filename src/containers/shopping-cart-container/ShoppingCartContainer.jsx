import React, { useState } from "react";

import { useStore } from "@stores";
import ShoppingCartItem from "@components/common/shopping-cart-item/ShoppingCartItem";

import * as S from "./ShoppingCartContainer.styled";
import getStripe from "@helpers/functions/stripe";

import useStripeCheckout from "@hooks/useStripeChecout";

const ShoppingCartContainer = () => {
  const {
    shoppingCart,
    increaseShoppingCartItemCount,
    decreaseShoppingCartItemCount,
    removeShoppingCartItem,
  } = useStore();

  const { stripeError, isLoading, redirectToCheckout } =
    useStripeCheckout(shoppingCart);

  // const [stripeError, setStripeError] = useState(null);
  // const [isLoading, setLoading] = useState(false);
  // const item = shoppingCart.map((cartItem) => {
  //   return {
  //     price: cartItem.id,
  //     quantity: cartItem.quantity,
  //   };
  // });

  // const checkoutOptions = {
  //   lineItems: item,
  //   mode: "payment",
  //   successUrl: `${window.location.origin}/success`,
  //   cancelUrl: `${window.location.origin}/cancel`,
  // };

  // const redirectToCheckout = async () => {
  //   setLoading(true);
  //   console.log("redirectToCheckout");

  //   const stripe = await getStripe();
  //   const { error } = await stripe.redirectToCheckout(checkoutOptions);
  //   console.log("Stripe checkout error", error);

  //   if (error) setStripeError(error.message);
  //   setLoading(false);
  // };

  // if (stripeError) alert(stripeError);

  const totalAmount = shoppingCart?.reduce((acc, product) => {
    return acc + (product.unit_amount / 100) * product.quantity;
  }, 0);

  console.log(shoppingCart);
  return (
    <S.ShoppingCartContainer>
      <S.ShoppingCartItemsContainer>
        {shoppingCart.map((cartItem) => (
          <ShoppingCartItem
            cartItem={cartItem}
            increaseShoppingCartItemCount={increaseShoppingCartItemCount}
            decreaseShoppingCartItemCount={decreaseShoppingCartItemCount}
            removeShoppingCartItem={removeShoppingCartItem}
            key={cartItem.id}
          />
        ))}
      </S.ShoppingCartItemsContainer>
      <S.ShoppingCartContainerBottomSection>
        <S.CartSubtotal>
          Subtotal <span>${totalAmount.toFixed(2)}</span>{" "}
        </S.CartSubtotal>
        <S.CheckoutButton onClick={redirectToCheckout} disable={isLoading}>
          {isLoading ? "Loading..." : "Checkout"}
        </S.CheckoutButton>
      </S.ShoppingCartContainerBottomSection>
    </S.ShoppingCartContainer>
  );
};

export { ShoppingCartContainer };

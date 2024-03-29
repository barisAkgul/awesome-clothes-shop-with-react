import React, { useState } from "react";

import { useStore } from "@stores";
import ShoppingCartItem from "@components/common/shopping-cart-item/ShoppingCartItem";

import * as S from "./ShoppingCartContainer.styled";

import useStripeCheckout from "@hooks/useStripeCheckout";

const ShoppingCartContainer = () => {
  const {
    shoppingCart,
    increaseShoppingCartItemCount,
    decreaseShoppingCartItemCount,
    removeShoppingCartItem,
  } = useStore();

  const { stripeError, isLoading, redirectToCheckout } =
    useStripeCheckout(shoppingCart);

  if (stripeError) console.log(stripeError);

  const totalAmount = shoppingCart?.reduce((acc, product) => {
    return acc + (product.unit_amount / 100) * product.quantity;
  }, 0);

  const isDisable = isLoading || shoppingCart.length === 0;
  console.log(isDisable);

  return (
    <S.ShoppingCartContainer>
      <S.ShoppingCartItemsContainer>
        {shoppingCart.length === 0 ? (
          <p className="empty-cart">Empty Cart</p>
        ) : (
          shoppingCart.map((cartItem) => (
            <ShoppingCartItem
              cartItem={cartItem}
              increaseShoppingCartItemCount={increaseShoppingCartItemCount}
              decreaseShoppingCartItemCount={decreaseShoppingCartItemCount}
              removeShoppingCartItem={removeShoppingCartItem}
              key={cartItem.id}
            />
          ))
        )}
      </S.ShoppingCartItemsContainer>
      <S.ShoppingCartContainerBottomSection>
        <S.CartSubtotal>
          Subtotal <span>${totalAmount.toFixed(2)}</span>{" "}
        </S.CartSubtotal>
        <S.CheckoutButton disabled={isDisable} onClick={redirectToCheckout}>
          {isLoading ? "Loading..." : "Checkout"}
        </S.CheckoutButton>
      </S.ShoppingCartContainerBottomSection>
    </S.ShoppingCartContainer>
  );
};

export { ShoppingCartContainer };

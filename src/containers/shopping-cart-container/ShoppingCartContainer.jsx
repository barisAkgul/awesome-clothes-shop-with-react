import React from "react";

import { useStore } from "@stores";
import ShoppingCartItem from "@components/common/shopping-cart-item/ShoppingCartItem";

import * as S from "./ShoppingCartContainer.styled";

const ShoppingCartContainer = () => {
  const {
    shoppingCart,
    increaseShoppingCartItemCount,
    decreaseShoppingCartItemCount,
    removeShoppingCartItem,
  } = useStore();

  // const router = useRouter();

  // async function checkout() {
  //   const lineItems = shoppingCart.map((cartItem) => {
  //     return {
  //       price: cartItem.id,
  //       quantity: cartItem.quantity,
  //     };
  //   });
  //   console.log(lineItems);
  //   const res = await fetch("/api/checkout", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ lineItems }),
  //   });
  //   const data = await res.json();
  //   router.push(data.session.url);
  // }

  const totalAmount = shoppingCart?.reduce((acc, product) => {
    return acc + (product.unit_amount / 100) * product.quantity;
  }, 0);

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
        <S.CheckoutButton>Checkout</S.CheckoutButton>
      </S.ShoppingCartContainerBottomSection>
    </S.ShoppingCartContainer>
  );
};

export { ShoppingCartContainer };

import React from "react";
import { HiPlusSmall, HiMinusSmall } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";

import * as S from "./ShoppingCartItem.styled";
import { parserProduct } from "@helpers/utils";

const ShoppingCartItem = ({
  cartItem,
  decreaseShoppingCartItemCount,
  increaseShoppingCartItemCount,
  removeShoppingCartItem,
}) => {
  const { unit_amount, product, quantity } = cartItem;
  const cartItemTotalCost = ((unit_amount / 100) * quantity).toFixed(2);
  return (
    <S.ShoppingCartItemContainer>
      <div className="item-img-section">
        <img src={product.images[0]} alt={product.description} />
      </div>
      <div className="item-info-section">
        <div className="info-top">
          <h4>{product.name}</h4>
          <div
            className="item-delete-icon"
            onClick={() => {
              removeShoppingCartItem(cartItem);
            }}
          >
            <IoCloseOutline />
          </div>
        </div>

        <p className="cart-item-desc">{product.description}</p>

        <div className="info-bottom">
          <div className="item-quantity-counter">
            <div
              className="item-decrease-button"
              onClick={() => {
                decreaseShoppingCartItemCount(cartItem);
              }}
            >
              <HiMinusSmall />
            </div>
            <p className="item-quantity">{quantity}</p>
            <div
              className="item-increase-button"
              onClick={() => {
                increaseShoppingCartItemCount(cartItem);
              }}
            >
              <HiPlusSmall />
            </div>
          </div>

          <div className="item-price">${cartItemTotalCost}</div>
        </div>
      </div>
    </S.ShoppingCartItemContainer>
  );
};

export default ShoppingCartItem;

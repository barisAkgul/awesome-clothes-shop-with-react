import { HiOutlineShoppingBag } from "react-icons/hi";
import React, { useEffect, useState } from "react";
import { Drawer } from "antd";

import { useStore } from "@stores";

import * as S from "./ShoppingCartIcon.styled";
import { ShoppingCartContainer } from "@containers/shopping-cart-container/ShoppingCartContainer";

const ShoppingCartIcon = () => {
  const [open, setOpen] = useState(false);
  const { shoppingCart } = useStore();

  const shoppingCartItemTotalLenght = shoppingCart?.reduce((acc, product) => {
    return acc + product.quantity;
  }, 0);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <S.ShoppingCartIconContainer>
        <HiOutlineShoppingBag onClick={showDrawer} />
        {shoppingCartItemTotalLenght > 0 && (
          <S.CartItemsLength>{shoppingCartItemTotalLenght}</S.CartItemsLength>
        )}
      </S.ShoppingCartIconContainer>

      <Drawer
        title="Shopping Cart"
        placement="right"
        onClose={onClose}
        open={open}
        style={{ width: "400px" }}
      >
        <ShoppingCartContainer />
      </Drawer>
    </>
  );
};

export { ShoppingCartIcon };

import React from "react";
import { BsBasket } from "react-icons/bs";
import { useStore } from "@stores/index";

import { parserProduct } from "@helpers/utils";

import * as S from "./ProductPageInfoSection.styled";

const ProductPageInfoSection = ({ product }) => {
  const { addToShoppingCart, shoppingCart } = useStore();

  const { name, description, cost } = parserProduct(product);

  const cartItemCount = shoppingCart.find((item) => item.id === product.id);

  const handleAddBasket = () => {
    addToShoppingCart(product);
  };

  return (
    <S.ProductPageInfoSection>
      <S.ProductName>{name}</S.ProductName>
      <S.ProductPrice>${cost}</S.ProductPrice>
      <S.ProductDescription>{description}</S.ProductDescription>

      <S.AddedButton onClick={handleAddBasket}>
        <BsBasket /> Add To Cart{" "}
        {cartItemCount?.quantity > 0 ? `(${cartItemCount.quantity})` : ""}
      </S.AddedButton>

      <S.BottomSection>
        <span>Vendor: Polo</span>
        <span>Product Type: T-Shirt</span>
        <span>Tag: T-Shirt, Women, Top</span>
      </S.BottomSection>
      <hr />
      <S.BottomSection>
        <span>DESCRIPTION</span>
        <hr />
        <span>ADDITIONAL INFORMATION</span>
        <hr />
        <span>FAQ</span>
      </S.BottomSection>
    </S.ProductPageInfoSection>
  );
};

export default ProductPageInfoSection;

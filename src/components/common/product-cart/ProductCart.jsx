import React from "react";

import * as S from "./ProductCart.styled";
const ProductCart = ({ product }) => {
  return (
    <S.ProductCartContainer>
      <img src={product.product.images[0]} alt={product.product.description} />
      <S.ProductName>{product.product.name}</S.ProductName>
      <S.ProductPrice>${product.unit_amount / 100}</S.ProductPrice>
    </S.ProductCartContainer>
  );
};

export { ProductCart };

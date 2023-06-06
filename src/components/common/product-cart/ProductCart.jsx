import React from "react";
import { parserProduct } from "@helpers/functions/utils";

import * as S from "./ProductCart.styled";
import { Link } from "react-router-dom";
const ProductCart = ({ product }) => {
  const { productId, description, cost, name, images } = parserProduct(product);

  return (
    <S.ProductCartContainer>
      <Link to={`/detail/${productId}`}>
        <S.ProductImage>
          <img src={images[0]} alt={description} />
        </S.ProductImage>
        <S.ProductName>{name}</S.ProductName>
        <S.ProductPrice>${cost}</S.ProductPrice>
      </Link>
    </S.ProductCartContainer>
  );
};

export { ProductCart };

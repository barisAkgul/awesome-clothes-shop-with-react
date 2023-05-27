import React from "react";

import { BsBasket } from "react-icons/bs";

import * as S from "./ProductPageInfoSection.styled";

const ProductPageInfoSection = ({ name, description, cost }) => {
  return (
    <S.ProductPageInfoSection>
      <S.ProductName>{name}</S.ProductName>
      <S.ProductPrice>${cost}</S.ProductPrice>
      <S.ProductDescription>{description}</S.ProductDescription>

      <S.AddedButton>
        <BsBasket /> Add To Cart
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

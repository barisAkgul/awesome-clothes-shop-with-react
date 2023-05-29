import React from "react";

import { parserProduct } from "@helpers/utils";
import ProductPageInfoSection from "@components/single-product/product-page-info-section/ProductPageInfoSection";

import * as S from "./SingleProductContainer.styled";

export const SingleProductContainer = ({ product }) => {
  const { name, images } = parserProduct(product);

  return (
    <S.SingleProductPageContainer>
      <img src={images[0]} alt={name} />
      <ProductPageInfoSection product={product} />
    </S.SingleProductPageContainer>
  );
};

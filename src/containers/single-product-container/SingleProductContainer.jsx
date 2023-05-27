import React from "react";

import { parserProduct } from "@helpers/utils";
import ProductPageInfoSection from "@components/single-product/product-page-info-section/ProductPageInfoSection";

import * as S from "./SingleProductContainer.styled";

export const SingleProductContainer = ({ product }) => {
  const { cost, description, name, images } = parserProduct(product);
  console.log(cost, description, name, images);

  return (
    <S.SingleProductPageContainer>
      <img src={images[0]} alt={name} />
      <ProductPageInfoSection
        cost={cost}
        description={description}
        name={name}
      />
    </S.SingleProductPageContainer>
  );
};

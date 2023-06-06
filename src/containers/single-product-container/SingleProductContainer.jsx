import React from "react";

import { parserProduct } from "@helpers/utils";
import ProductPageInfoSection from "@components/single-product/product-page-info-section/ProductPageInfoSection";

import * as S from "./SingleProductContainer.styled";
import Skeleton from "@components/common/skeleton/Skeleton";
import Image from "@components/common/image/Image";

export const SingleProductContainer = ({ product }) => {
  const { name, images } = parserProduct(product);

  return (
    <S.SingleProductPageContainer>
      <div className="product-image">
        <Image src={images[0]} alt={name} />
      </div>

      <ProductPageInfoSection product={product} />
    </S.SingleProductPageContainer>
  );
};

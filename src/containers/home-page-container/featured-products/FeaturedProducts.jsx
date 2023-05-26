import React, { useEffect, useState } from "react";
import { useStore } from "@stores";
import useFetch from "@hooks/useFetch";

import { ProductCart } from "@components/common/product-cart/ProductCart";

import * as S from "./FeaturedProducts.styled";

const FeaturedProducts = () => {
  const { getProducts } = useStore();
  const { data: products, error, loading } = useFetch(() => getProducts());

  if (loading) {
    return <h1>Loading</h1>;
  }

  if (error) console.log(error);

  if (products) {
    console.log(products);
  }

  return (
    <S.FeaturedProductsContainer>
      <h2>Featured Products</h2>
      <S.ProductsSection>
        {products?.map((product) => (
          <ProductCart key={product.id} product={product} />
        ))}
      </S.ProductsSection>
    </S.FeaturedProductsContainer>
  );
};

export { FeaturedProducts };

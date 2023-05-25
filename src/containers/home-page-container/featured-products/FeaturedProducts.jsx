import React, { useEffect, useState } from "react";
import { useStore } from "@stores";

import { ProductCart } from "@components/common/product-cart/ProductCart";

import * as S from "./FeaturedProducts.styled";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const { getProducts } = useStore();

  useEffect(() => {
    getProducts()
      .then((response) => setProducts(response.slice(0, 4)))
      .catch((e) => console.log("Get Products Error: ", e));
  }, []);

  console.log(products);
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

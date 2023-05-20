import React, { useEffect, useState } from "react";
import Stripe from "stripe";

import { ProductCart } from "@components/common/product-cart/ProductCart";

import * as S from "./FeaturedProducts.styled";

async function getStripeProducts() {
  const stripe = new Stripe(import.meta.env.VITE_STRIPE_SECRET ?? "", {
    apiVersion: "2020-08-27",
  });

  const res = await stripe.prices.list({ expand: ["data.product"] });

  const products = res.data;
  return products;
}

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getStripeProducts().then((response) => setProducts(response));
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

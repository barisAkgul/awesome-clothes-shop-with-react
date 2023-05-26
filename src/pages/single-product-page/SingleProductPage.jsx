import React from "react";
import { useParams } from "react-router-dom";
import { useStore } from "@stores/index";
import useFetch from "@hooks/useFetch";

import { SingleProductContainer } from "@containers/single-product-container/SingleProductContainer";

const SingleProductPage = () => {
  const { productId } = useParams();
  const { getProduct } = useStore();
  const {
    data: product,
    error,
    loading,
  } = useFetch(() => getProduct(productId));

  if (loading) {
    return <h1>Loading</h1>;
  }

  if (error) console.log(error);

  if (product) {
    console.log(product);
  }
  return <SingleProductContainer product={product} />;
};

export { SingleProductPage };

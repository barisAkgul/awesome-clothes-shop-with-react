import React from "react";
import { useParams } from "react-router-dom";

import { SingleProductContainer } from "@containers/single-product-container/SingleProductContainer";

const SingleProductPage = () => {
  const { productId } = useParams();
  return <SingleProductContainer productId={productId} />;
};

export { SingleProductPage };

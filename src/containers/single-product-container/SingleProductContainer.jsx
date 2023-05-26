import React, { useEffect, useState } from "react";
import { useStore } from "@stores/index";

export const SingleProductContainer = ({ productId }) => {
  const [product, setProduct] = useState([]);
  const { getProduct } = useStore();

  useEffect(() => {
    getProduct(productId)
      .then((response) => setProduct(response))
      .catch((e) => console.log("Get Product Error: ", e));
  }, []);

  console.log(product);
  return <div>SingleProductContainer</div>;
};

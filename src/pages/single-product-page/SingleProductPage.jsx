import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "@stores/index";
import useFetch from "@hooks/useFetch";

import { SingleProductContainer } from "@containers/single-product-container/SingleProductContainer";
import Loading from "@components/common/loading/Loading";

const SingleProductPage = () => {
  const { productId } = useParams();
  const { getProduct } = useStore();
  const {
    data: product,
    error,
    loading,
  } = useFetch(() => getProduct(productId));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) console.log(error);

  return <SingleProductContainer product={product} />;
};

export { SingleProductPage };

import React from "react";
import useFetch from "@hooks/useFetch";
import { useStore } from "@stores/index";

import { ProductsPageContainer } from "@containers/products-page-container/ProductsPageContainer";
import { parserProduct } from "@helpers/functions/utils";

const ProductsPage = () => {
  const { getProducts } = useStore();
  const { data, error, loading } = useFetch(() => getProducts());

  const products = data?.map((product) => parserProduct(product));

  return <ProductsPageContainer products={products} loading={loading} />;
};

export { ProductsPage };

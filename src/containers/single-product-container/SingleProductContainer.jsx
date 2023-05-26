import React from "react";

import { parserProduct } from "@helpers/utils";

export const SingleProductContainer = ({ product }) => {
  const { cost, description, name, images } = parserProduct(product);
  console.log(cost, description, name, images);

  return <div>SingleProductContainer</div>;
};

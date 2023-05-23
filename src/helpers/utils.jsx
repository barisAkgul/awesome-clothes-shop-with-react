const parserProduct = (product) => {
  const { id: price_id, unit_amount: cost, product: productInfo } = product;
  const { name, description, images } = productInfo;
  const formattedCost = cost / 100;

  return {
    price_id,
    cost: formattedCost,
    name,
    description,
    images,
  };
};

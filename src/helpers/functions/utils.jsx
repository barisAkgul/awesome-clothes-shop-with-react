export const parserProduct = (product) => {
  const { id: productId, unit_amount: cost, product: productInfo } = product;
  const { name, description, images, metadata } = productInfo;
  const { short_description, category } = metadata;
  const formattedCost = cost / 100;

  return {
    productId,
    cost: formattedCost,
    name,
    description,
    images,
    short_description,
    category,
  };
};

export const filterProducts = (products, searchValue) =>
  searchValue
    ? products.filter((product) =>
        product.product.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    : [];

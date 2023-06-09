const filterByCategory = (products, selectedCategory) => {
  return selectedCategory === "all" || selectedCategory === ""
    ? products
    : products.filter((product) => product.category === selectedCategory);
};

const filterByCost = (products, maxCost) => {
  return products.filter((product) => product.cost <= maxCost);
};

const sortProducts = (products, selectedOption) => {
  let sortedProducts = [...products];
  if (selectedOption === "asc") {
    sortedProducts.sort((a, b) => a.cost - b.cost);
  } else if (selectedOption === "desc") {
    sortedProducts.sort((a, b) => b.cost - a.cost);
  }
  return sortedProducts;
};

export const applyFilters = (
  products,
  selectedCategory,
  maxCost,
  selectedOption
) => {
  let filteredProducts = filterByCategory(products, selectedCategory);
  filteredProducts = filterByCost(filteredProducts, maxCost);
  filteredProducts = sortProducts(filteredProducts, selectedOption);
  return filteredProducts;
};

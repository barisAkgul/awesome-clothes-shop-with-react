import React from "react";
import * as S from "./ProductsListSection.styled";

import { AnimatePresence, motion } from "framer-motion";

const ProductsListSection = ({
  selectedCategory,
  maxPrice,
  selectedOption,
}) => {
  const products = [
    { id: 1, title: "Product 1", category: "man", price: 100 },
    { id: 2, title: "Product 2", category: "woman", price: 500 },
    { id: 3, title: "Product 3", category: "man", price: 800 },
    { id: 4, title: "Product 4", category: "man", price: 300 },
    { id: 5, title: "Product 5", category: "woman", price: 400 },
    { id: 6, title: "Product 6", category: "man", price: 800 },
    // ...
  ];

  const filteredByCategory =
    selectedCategory === "all" || selectedCategory === ""
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const filteredByPrice = filteredByCategory.filter(
    (product) => product.price <= maxPrice
  );

  let sortedProducts = [...filteredByPrice];
  if (selectedOption === "asc") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (selectedOption === "desc") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <S.ProductsListContainer>
      <AnimatePresence>
        {sortedProducts.map((product) => (
          <motion.div
            className="image-card"
            key={product.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <S.ProductItem>
              <img src="https://joesch.moe/api/v1/random" alt={product.title} />
              <S.ProductTitle>{product.title}</S.ProductTitle>
              <S.ProductPrice>${product.price}</S.ProductPrice>
            </S.ProductItem>
          </motion.div>
        ))}
      </AnimatePresence>
    </S.ProductsListContainer>
  );
};

export { ProductsListSection };

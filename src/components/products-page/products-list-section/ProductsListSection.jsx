import React from "react";
import * as S from "./ProductsListSection.styled";

import { AnimatePresence, motion } from "framer-motion";
import Skeleton from "@components/common/skeleton/Skeleton";
import { applyFilters } from "./helpers";
import { Link } from "react-router-dom";
const ProductsListSection = ({
  selectedCategory,
  maxCost,
  selectedOption,
  loading,
  products,
}) => {
  if (loading) {
    return (
      <S.ProductsListContainer>
        <Skeleton type={"feed"} count={12} />
      </S.ProductsListContainer>
    );
  }

  const filteredProducts = applyFilters(
    products,
    selectedCategory,
    maxCost,
    selectedOption
  );

  console.log(products);

  return (
    <S.ProductsListContainer>
      <AnimatePresence>
        {filteredProducts.map((product) => (
          <motion.div
            className="image-card"
            key={product.productId}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <S.ProductItem>
              <Link to={`/detail/${product.productId}`}>
                <img src={product.images[0]} alt={product.name} />
                <S.ProductTitle>{product.name}</S.ProductTitle>
                <S.ProductPrice>${product.cost}</S.ProductPrice>
              </Link>
            </S.ProductItem>
          </motion.div>
        ))}
      </AnimatePresence>
    </S.ProductsListContainer>
  );
};

export { ProductsListSection };

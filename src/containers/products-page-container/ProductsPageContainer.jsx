import React, { useState } from "react";

import { FilterSection } from "@components/products-page/filter-section/FilterSection";
import { ProductsListSection } from "@components/products-page/products-list-section/ProductsListSection";

import * as S from "./ProductsPageContainer.styled";

const ProductsPageContainer = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [maxPrice, setMaxPrice] = useState(1000);
  const [selectedOption, setSelectedOption] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handlePriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  const handleSortChange = (e) => {
    setSelectedOption(e.target.value);
  };

  console.log(selectedCategory, maxPrice, selectedOption);

  return (
    <S.ProductsPageContainer>
      <FilterSection
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
        maxPrice={maxPrice}
        handlePriceChange={handlePriceChange}
        selectedOption={selectedOption}
        handleSortChange={handleSortChange}
      />
      <ProductsListSection
        selectedCategory={selectedCategory}
        maxPrice={maxPrice}
        selectedOption={selectedOption}
      />
    </S.ProductsPageContainer>
  );
};
// const ProductsPageContainer = () => {
//   return (
//     <S.ProductsPageContainer>
//       <FilterSection />
//       <ProductsListSection />
//     </S.ProductsPageContainer>
//   );
// };

export { ProductsPageContainer };

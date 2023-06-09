import React, { useState } from "react";

import { FilterSection } from "@components/products-page/filter-section/FilterSection";
import { ProductsListSection } from "@components/products-page/products-list-section/ProductsListSection";

import * as S from "./ProductsPageContainer.styled";
import { TopSection } from "@components/common/top-section/TopSection";

const ProductsPageContainer = ({ loading, products }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [maxPrice, setMaxPrice] = useState(100);
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

  return (
    <>
      <TopSection page={"Shop"} />
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
          maxCost={maxPrice}
          selectedOption={selectedOption}
          loading={loading}
          products={products}
        />
      </S.ProductsPageContainer>
    </>
  );
};

export { ProductsPageContainer };

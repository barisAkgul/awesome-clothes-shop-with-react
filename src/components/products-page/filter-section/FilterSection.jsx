import React, { useState } from "react";
const categories = ["all", "man", "woman"];

import * as S from "./FilterSection.styled";

const FilterSection = ({
  selectedCategory,
  handleCategoryChange,
  maxPrice,
  handlePriceChange,
  selectedOption,
  handleSortChange,
}) => {
  return (
    <S.FilterSectionContainer>
      <S.Categories>
        {categories.map((category) => (
          <p
            key={category}
            className={selectedCategory === category ? "active" : ""}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </p>
        ))}
      </S.Categories>
      <S.Range>
        <span>0</span>
        <input
          type="range"
          min={0}
          max={1000}
          value={maxPrice}
          onChange={handlePriceChange}
        />
        <span>{maxPrice}</span>
      </S.Range>
      <S.Sort>
        <select value={selectedOption} onChange={handleSortChange}>
          <option value="">Sort Price</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </S.Sort>
    </S.FilterSectionContainer>
  );
};

export { FilterSection };

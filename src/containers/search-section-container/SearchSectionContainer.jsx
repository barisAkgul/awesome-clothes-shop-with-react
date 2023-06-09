import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

import { useStore } from "@stores";

import "./SearchSectionContainer.scss";

import SearchProductCart from "@components/common/search-product-cart/SearchProductCart";
import { filterProducts } from "@helpers/functions/utils";
import useFetch from "@hooks/useFetch";

const SearchSectionContainer = () => {
  const [searchValue, setSearchValue] = useState("");

  const { getProducts } = useStore();
  const { data: products, error, loading } = useFetch(() => getProducts());

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredProducts = filterProducts(products, searchValue);

  console.log(filteredProducts, products);

  return (
    <>
      <div className="search-section-top-area">
        <h1>Search for products</h1>
        <p className="search-section-sub-desc">
          Start typing to see products you are looking for.
        </p>
      </div>
      <div className="search-section-input-area">
        <form className="search-form">
          <input
            type="text"
            placeholder="Search a product"
            value={searchValue}
            onChange={handleSearch}
            className="search-input"
          />
          <button className="search-button">
            <IoSearchOutline />
          </button>
        </form>
      </div>

      <div className="search-section-results-area">
        <div className="search-results-heading">
          <h3>RESULTS FROM PRODUCT</h3>
        </div>
        <div className="search-results">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <SearchProductCart product={product} key={product.id} />
            ))
          ) : (
            <a href="#" className="search-result-item">
              😔Product Not Found😔
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchSectionContainer;

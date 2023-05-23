import React from "react";

import * as S from "./SearchProductCart.styled";

const SearchProductCart = ({ product }) => {
  return (
    <S.SearchItem href="#">
      <S.SearchItemImage
        src={product.product.images[0]}
        alt={product.product.description}
      />
      <S.SearchItemInfo>
        <h4>{product.product.name}</h4>
        <S.SearchItemDesc>{product.product.description}</S.SearchItemDesc>
        <S.SearchItemPrice>{product.unit_amount / 100}</S.SearchItemPrice>
      </S.SearchItemInfo>
    </S.SearchItem>
  );
};

export default SearchProductCart;

import React from "react";
import { IoPersonOutline, IoSearchOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi";

import * as S from "./IconSection.styled";
import { SearchIcon } from "./search-icon/SearchIcon";
import { ShoppingCartIcon } from "./shopping-cart-icon/ShoppingCartIcon";

const IconSection = () => {
  return (
    <S.IconSectionContainer>
      <IoPersonOutline />
      <SearchIcon />
      <IoIosHeartEmpty />
      <ShoppingCartIcon />
    </S.IconSectionContainer>
  );
};

export { IconSection };

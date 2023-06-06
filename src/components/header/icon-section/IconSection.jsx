import React from "react";
import { IoPersonOutline, IoSearchOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi";

import * as S from "./IconSection.styled";
import { SearchIcon } from "./search-icon/SearchIcon";
import { ShoppingCartIcon } from "./shopping-cart-icon/ShoppingCartIcon";
import AuthIcon from "./auth-icon/AuthIcon";

const IconSection = () => {
  return (
    <S.IconSectionContainer>
         <AuthIcon />
      <SearchIcon />
      <IoIosHeartEmpty />
      <ShoppingCartIcon />
    </S.IconSectionContainer>
  );
};

export { IconSection };

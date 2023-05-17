import React from "react";
import { IoPersonOutline, IoSearchOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi";

import * as S from "./IconSection.styled";

const IconSection = () => {
  return (
    <S.IconSectionContainer>
      <IoPersonOutline />
      <IoSearchOutline />
      <IoIosHeartEmpty />
      <HiOutlineShoppingBag />
    </S.IconSectionContainer>
  );
};

export default IconSection;

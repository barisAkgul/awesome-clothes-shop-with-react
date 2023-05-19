import React from "react";

import * as S from "./Navbar.styled";

const Navbar = () => {
  return (
    <S.Navbar>
      <S.NavbarItem>Home</S.NavbarItem>
      <S.NavbarItem>Shop</S.NavbarItem>
      <S.NavbarItem>Blog</S.NavbarItem>
      <S.NavbarItem>Contact</S.NavbarItem>
    </S.Navbar>
  );
};

export { Navbar };

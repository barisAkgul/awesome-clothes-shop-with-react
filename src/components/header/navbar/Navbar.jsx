import React from "react";

import * as S from "./Navbar.styled";

const Navbar = () => {
  return (
    <S.Navbar>
      <S.NavbarItem>Link 1</S.NavbarItem>
      <S.NavbarItem>Link 2</S.NavbarItem>
      <S.NavbarItem>Link 3</S.NavbarItem>
      <S.NavbarItem>Link 4</S.NavbarItem>
    </S.Navbar>
  );
};

export { Navbar };

import React from "react";
import { navbarItems } from "@helpers/config/navbar";

import * as S from "./Navbar.styled";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <S.Navbar>
      {navbarItems.map((item) => (
        <S.NavbarItem key={item.id}>
          <Link to={item.link}>{item.title}</Link>
        </S.NavbarItem>
      ))}
    </S.Navbar>
  );
};

export { Navbar };

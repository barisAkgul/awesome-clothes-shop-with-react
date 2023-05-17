import { useState } from "react";

import { Logo } from "@components/header/logo/Logo";
import { Navbar } from "@components/header/navbar/Navbar";
import IconSection from "@components/header/icon-section/IconSection";

import * as S from "./HeaderContainer.styled";

const Header = () => {
  return (
    <S.Header>
      <Logo />
      <Navbar />
      <IconSection />
    </S.Header>
  );
};

export { Header };

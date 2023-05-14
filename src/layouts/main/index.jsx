import React from "react";

import * as S from "./styles";

import { Main } from "@components/main";
import { Header } from "@containers/header-container/HeaderContainer";

const MainLayouts = () => {
  return (
    <S.MainLayout>
      <Header />
      <Main />
    </S.MainLayout>
  );
};

export { MainLayouts };

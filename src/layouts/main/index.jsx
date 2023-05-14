import React from "react";

import * as S from "./styles";

import { Main } from "@components/main";
import { Header } from "@containers/header-container/HeaderContainer";

const MainLayouts = () => {
  return (
    <S.MainLayout>
      <S.Header>
        <Header />
      </S.Header>
      <S.Main>
        <Main />
      </S.Main>
    </S.MainLayout>
  );
};

export { MainLayouts };

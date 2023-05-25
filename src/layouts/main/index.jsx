import React from "react";

import * as S from "./styles";

import { Main } from "@components/main";
import { Header } from "@containers/header-container/HeaderContainer";
import { Footer } from "@components/footer/Footer";

const MainLayouts = () => {
  return (
    <S.MainLayout>
      <S.Header>
        <Header />
      </S.Header>
      <S.Main>
        <Main />
      </S.Main>
      <S.Footer>
        <Footer />
      </S.Footer>
    </S.MainLayout>
  );
};

export { MainLayouts };

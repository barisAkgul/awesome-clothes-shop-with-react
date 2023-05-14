import React from "react";
import { Outlet } from "react-router-dom";

import * as S from "./index.styled";

const Main = () => {
  return (
    <S.LayoutMain>
      <Outlet />
    </S.LayoutMain>
  );
};

export { Main };

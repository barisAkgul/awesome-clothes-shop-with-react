import React from "react";
import { Outlet } from "react-router-dom";

// import "./styles.scss";

import * as S from "./index.styled";

const Main = () => {
  return (
    // <div className="layout-mainbar">
    //   {" "}
    //   <Outlet />
    // </div>

    <S.LayoutMain>
      <Outlet />
    </S.LayoutMain>
  );
};

export { Main };

import React from "react";
import { Link } from "react-router-dom";

import * as S from "./Logo.styled";

const Logo = () => {
  return (
    <S.Logo>
      <Link to="/">
        W<span>HISPERS</span>
      </Link>
    </S.Logo>
  );
};

export { Logo };

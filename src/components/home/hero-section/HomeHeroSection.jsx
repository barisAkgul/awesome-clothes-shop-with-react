import React from "react";

import * as S from "./HomeHeroSection.styled";

const HomeHeroSection = () => {
  return (
    <S.HeroSectionContainer>
      <S.HeroSectionBody>
        <S.Content>
          <p>EXTRA 55% OFF IN SPRING SALE</p>
          <h1>Discover &amp; ShopThe Trend</h1>
          <button>SHOP NOW</button>
        </S.Content>
      </S.HeroSectionBody>
    </S.HeroSectionContainer>
  );
};

export { HomeHeroSection };

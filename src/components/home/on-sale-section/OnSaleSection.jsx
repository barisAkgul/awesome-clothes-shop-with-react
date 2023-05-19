import React from "react";

import { onSaleData } from "./constants";
import * as S from "./OnSaleSection.styled";

const OnSaleSection = () => {
  return (
    <S.SaleGrid>
      {onSaleData.map((item) => {
        return (
          <S.SaleCard>
            <S.SaleImage src={item.imgSrc} />
            <S.SaleContent>
              <S.SaleSubtitle>{item.subtitle}</S.SaleSubtitle>
              <S.SaleTitle>
                sale <S.SaleDiscount>{item.discount}</S.SaleDiscount> off
              </S.SaleTitle>
              <S.SaleSubtitle>- DON'T MISS -</S.SaleSubtitle>
              <S.SaleButton>SHOP NOW</S.SaleButton>
            </S.SaleContent>
          </S.SaleCard>
        );
      })}
    </S.SaleGrid>
  );
};

export { OnSaleSection };

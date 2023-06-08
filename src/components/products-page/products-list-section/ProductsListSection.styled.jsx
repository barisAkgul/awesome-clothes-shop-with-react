import styled from "styled-components";

export const ProductsListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;

  //   display: grid;
  //   grid-gap: 20px;
  //   grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  //   padding: 30px 80px;
`;

export const ProductItem = styled.div`
  /* Ürün kartı stilini burada tanımla */
`;

export const ProductImage = styled.img`
  /* Ürün resmi stilini burada tanımla */
`;

export const ProductTitle = styled.h3`
  /* Ürün başlığı stilini burada tanımla */
`;

export const ProductPrice = styled.span`
  /* Ürün fiyatı stilini burada tanımla */
`;

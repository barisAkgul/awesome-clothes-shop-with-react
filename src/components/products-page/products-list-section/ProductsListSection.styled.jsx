import styled from "styled-components";

export const ProductsListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 24px 12px;
`;

export const ProductItem = styled.div`
  /* Ürün kartı stilini burada tanımla */
`;

export const ProductImage = styled.img`
  /* Ürün resmi stilini burada tanımla */
`;

export const ProductTitle = styled.h3`
  font-size: 14px;
  color: var(--text-light);
  font-weight: 500;
`;

export const ProductPrice = styled.span`
  /* Ürün fiyatı stilini burada tanımla */
`;

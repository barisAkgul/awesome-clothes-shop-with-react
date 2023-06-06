import styled from "styled-components";

export const ProductCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: var(--text-dark);
  margin-top: 30px;
`;

export const ProductImage = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;

  img {
    width: 100%;
    display: block;
    transition: transform 0.3s ease;
    transform-origin: center center;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

export const ProductName = styled.div`
  font-size: 1rem;
  font-weight: 600;
`;
export const ProductPrice = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

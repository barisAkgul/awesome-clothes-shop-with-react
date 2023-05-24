import styled from "styled-components";

export const ProductCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: var(--text-dark);
  margin-top: 30px;

  img {
    width: 100%;
    display: block;
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

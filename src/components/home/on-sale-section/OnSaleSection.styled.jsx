import styled from "styled-components";

export const SaleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 30px 80px;
`;

export const SaleCard = styled.div`
  position: relative;
  overflow: hidden;

  &::before {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    top: -100%;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    transition: 0.5s;
  }

  &:hover::before {
    top: 0;
  }
`;

export const SaleImage = styled.img`
  width: 100%;
  display: block;
`;

export const SaleContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  color: var(--white);
  text-align: center;
`;

export const SaleSubtitle = styled.p`
  font-size: 1rem;
`;

export const SaleTitle = styled.h4`
  font-size: 2rem;
  font-weight: 600;
`;

export const SaleDiscount = styled.span`
  font-size: 2.5rem;
`;

export const SaleButton = styled.button`
  margin-top: 2rem;
  color: var(--white);
  background-color: var(--text-dark);

  padding: 0.75rem 2rem;
  font-size: 0.8rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.3s;

  ${SaleCard}:hover & {
    color: var(--text-dark);
    background-color: var(--white);
  }
`;

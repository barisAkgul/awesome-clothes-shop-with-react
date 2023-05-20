import styled from "styled-components";

export const FeaturedProductsContainer = styled.div`
  padding: 5rem 1rem;

  h2 {
    padding-bottom: 0.5rem;
    margin-bottom: 4rem;
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
    color: var(--text-dark);
    position: relative;

    &:after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      height: 3px;
      width: 175px;
      background-color: var(--text-dark);
    }
  }
`;

export const ProductsSection = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  padding: 30px 80px;
`;

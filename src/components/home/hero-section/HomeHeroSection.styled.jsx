import styled from "styled-components";

export const HeroSectionContainer = styled.div`
  margin-top: 10rem;
  background-color: var(--light-blue);
`;

export const HeroSectionBody = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: var(--max-width);
  margin: auto;
  padding: 5rem 1rem;
`;

export const Content = styled.div`
  p {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--text-light);
    margin-bottom: 0.5rem;
  }

  h1 {
    font-size: 3rem;
    font-weight: 400;
    margin-bottom: 2rem;
    color: var(--text-dark);
  }

  button {
    background-color: var(--text-dark);
    color: var(--white);
    padding: 0.75rem 2rem;
    font-size: 0.8rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: 0.3s;
  }
`;

export const ImageSection = styled.div`
  position: relative;
  max-width: 500px;

  img {
    position: absolute;
    bottom: -5rem;
  }
`;

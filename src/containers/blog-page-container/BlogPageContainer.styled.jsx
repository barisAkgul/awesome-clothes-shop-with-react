import styled from "styled-components";

export const NewsContainer = styled.div`
  margin: auto;
  padding: 2rem 1rem;
  background-color: var(--extra-light);

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
      width: 125px;
      background-color: var(--text-dark);
    }
`;

export const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 30px 80px;
`;

export const NewsCard = styled.div`
  cursor: pointer;
`;

export const NewsDetail = styled.div`
  padding: 1rem;
  display: grid;
  gap: 1rem;
  text-align: center;

  img {
    width: 100%;
    display: block;
  }

  p {
    font-size: 0.8rem;
    color: var(--text-light);

    i {
      font-size: 0.5rem;
      color: var(--text-light);
      padding: 0.5rem 0.8rem;
      position: relative;
    }

    i::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: var(--text-light);
    }
    span {
      font-weight: 600;
    }
  }

  &:hover {
    /* NewsCard bileşeni üzerine gelindiğinde yapılacak stil tanımlamaları */
  }
`;

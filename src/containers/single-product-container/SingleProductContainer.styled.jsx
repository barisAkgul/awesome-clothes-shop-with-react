import styled from "styled-components";

export const SingleProductPageContainer = styled.div`
  height: auto;
  padding: 20px 10%;
  gap: 50px;
  border-bottom: 1px solid grey;
  border-bottom: 1px solid rgb(238, 237, 237);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  .product-image {
    display: contents;
    margin: auto;
    img {
      max-height: 88vh;
      max-width: 100%;
      height: auto;
    }
  }

  hr {
    border: 1px solid rgb(238, 237, 237);
  }
`;

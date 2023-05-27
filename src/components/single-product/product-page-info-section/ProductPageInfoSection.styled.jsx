import styled from "styled-components";

export const ProductPageInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductName = styled.h1``;

export const ProductPrice = styled.span`
  font-size: 20px;
  color: var(--secondary-blue);
  font-weight: 500;
`;

export const ProductDescription = styled.p`
  font-weight: 300;
  text-align: justify;
  color: #4e4a4a;
  font-size: 14px;
  margin-top: 30px;
`;

export const AddedButton = styled.button`
  width: 200px;
  padding: 8px;
  background-color: var(--secondary-blue);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  border: none;
  font-weight: 500;
  margin-top: 24px;
`;

export const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: gray;
  font-size: 14px;
  margin-top: 30px;

  hr {
    width: 200px;
    border: 1px solid rgb(238, 237, 237);
  }
`;

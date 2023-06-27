import styled from "styled-components";

export const ShoppingCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding-right: 15px;

  .empty-cart {
    margin-top: 50px;
    padding: 20px;
    border: 2px solid black;
    font-size: 18px;
    font-family: Arial, sans-serif;
    color: #333;
    text-align: center;
  }
`;

export const ShoppingCartItemsContainer = styled.div`
  max-height: 68vh;
  overflow-y: auto;
`;

export const ShoppingCartContainerBottomSection = styled.div``;

export const CartSubtotal = styled.div`
  display: flex;
  justify-content: space-between;
  color: #2e2d2e;
  font-size: 15px;
  font-weight: 600;
`;

export const CheckoutButton = styled.div`
  background-color: #2e2d2e;
  padding: 10px;
  color: white;
  text-align: center;
  margin-top: 12px;
  cursor: pointer;
`;

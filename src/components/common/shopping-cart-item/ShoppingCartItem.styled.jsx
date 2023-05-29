import styled from "styled-components";

export const ShoppingCartItemContainer = styled.div`
  display: flex;
  gap: 24px;
  padding-bottom: 8px;
  width: 100%;
  border-bottom: 1px solid lightgray;
  margin-bottom: 16px;

  .item-img-section {
    width: 100px;
  }

  .item-info-section {
    display: flex;
    flex-direction: column;
    padding-right: 12px;
    width: 100%;

    .cart-item-desc {
      margin-bottom: 8px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    h4 {
      font-size: 11px;
      margin: 4px 0px 6px 0px;
    }

    p {
      font-size: 11px;
      font-size: 0.7rem;
      opacity: 0.6;
    }

    .info-top {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .item-delete-icon {
        cursor: pointer;
      }
    }

    .info-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: auto;
      margin-bottom: 8px;

      .item-quantity-counter {
        display: flex;
        gap: 12px;
        border: 1px solid grey;
        width: 70px;
        height: 28px;
        justify-content: center;
        font-size: 14px;
        /* padding: 4px; */
        align-items: center;

        opacity: 0.6;

        .item-decrease-button,
        .item-increase-button {
          cursor: pointer;
        }

        .item-quantity {
          font-size: 13px;
          opacity: 0.9;
        }
      }

      .item-price {
        font-weight: bold;
        font-family: "Jost", sans-serif;
      }
    }
  }
`;

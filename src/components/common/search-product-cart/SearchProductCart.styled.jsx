import styled from "styled-components";

export const SearchItem = styled.div`
  display: flex;
  column-gap: 15px;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #dee0ea;
  border-right: 1px solid #dee0ea;
`;

export const SearchItemImage = styled.img`
  max-width: 65px;
  width: 100%;
`;

export const SearchItemInfo = styled.div`
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 6px 0px;
`;

export const SearchItemDesc = styled.span`
  color: #7a7a7a;
  margin: 2px 0;
  font-size: 10px;
  margin-bottom: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const SearchItemPrice = styled.span`
  font-weight: 600;
  color: #dc3545;
`;

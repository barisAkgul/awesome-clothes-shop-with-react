import styled from "styled-components";

export const FilterSectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--text-light);
  padding: 12px;
  width: 100%;
  gap: 20px;
  flex-wrap: wrap;

  @media screen and (max-width: 967px) {
    > * {
      flex: 1 0 200px;
    }
  }
  > :last-child {
    // flex-basis: auto;
    //padding-left: 120px;
  }
`;

export const Categories = styled.div`
  display: flex;
  text-transform: capitalize;
  gap: 20px;
  font-size: 1.2rem;
  color: var(--text-light);

  p {
    cursor: pointer;
  }

  .active {
    border-bottom: 1px solid blue;
  }
`;

export const Range = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  span {
    width: 30px;
  }

  input {
    width: 200px;
    -webkit-appearance: none;
    height: 5px;
    border-radius: 5px;
    background: #d9d9d9;
    outline: none;
    opacity: 0.7;
    transition: opacity 0.2s;
  }

  input::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #007bff;
    cursor: pointer;
  }
`;

export const Sort = styled.div`
  position: relative;
  width: 200px;

  select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    appearance: none;
    background-color: #fff;
    font-size: 16px;
    font-family: Arial, sans-serif;
  }
`;

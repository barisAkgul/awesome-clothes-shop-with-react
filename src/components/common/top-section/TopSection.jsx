import React from "react";
import styled from "styled-components";

const TopSectionContainer = styled.div`
  background-color: var(--alabaster);
  padding: 2rem 10%;
  font-size: 24px;
`;

const TopSection = ({ page }) => {
  return <TopSectionContainer>{page}</TopSectionContainer>;
};

export { TopSection };

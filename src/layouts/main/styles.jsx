import styled from "styled-components";

export const MainLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  height: 100vh;
`;

export const Header = styled.div`
  position: fixed;
  width: 100%;
  height: 50px;
`;

export const Main = styled.div`
  height: 100%;
  width: 100vw;
  padding-top: 50px;
`;

import styled from "styled-components";

export const MainLayout = styled.div`
  display: grid;
  // grid-template-columns: 1fr 3fr;
  height: 100vh;
`;

export const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 65px;
  z-index: 999;
`;

export const Main = styled.main`
  height: 100%;
  width: 100vw;
  padding-top: 65px;
`;

export const Footer = styled.footer``;

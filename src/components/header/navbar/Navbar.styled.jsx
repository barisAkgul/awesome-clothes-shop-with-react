import styled from "styled-components";

export const Navbar = styled.div`
  display: flex;
  gap: 36px;
  color: black;
`;

export const NavbarItem = styled.div`
  cursor: pointer;
  transition: 0.3s ease all;

  &:hover {
    color: var(--main-blue);
  }
`;

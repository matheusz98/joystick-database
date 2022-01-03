import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  z-index: 1;
  margin-bottom: -80px;
  transition: 0.3s ease-in-out;
`;

export const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 80px;
  display: flex;
  justify-content: start;
  margin: 0 auto;
  padding: 0 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const NavbarLogo = styled(Link)`
  display: flex;
  justify-self: flex-start;
  align-items: center;
  font-size: 1.5rem;
  color: var(--white);
  font-weight: 300;
  text-align: center;
  cursor: pointer;
`;

export const NavbarIcon = styled.img`
  width: 3rem;
  margin-right: 0.5rem;
`;

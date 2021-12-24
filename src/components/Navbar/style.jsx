import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  width: 100%;
  height: 80px;
  position: absolute;
  z-index: 1;
  background: transparent;
`;

export const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 50px;

  @media (max-width: 768px) {
    padding: 0 30px;
    flex-direction: column;
  }
`;

export const NavbarLogo = styled(Link)`
  display: flex;
  align-items: center;
  color: var(--white);
  margin-left: 2rem;

  h1 {
    font-size: 1.4rem;
    margin-top: 30px;
    font-weight: 600;
    letter-spacing: 2px;
    text-align: center;

    @media (max-width: 480px) {
      padding-right: 4rem;
    }
  }
`;

export const NavbarIcon = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 1rem;
`;

export const NavbarSearch = styled.div`
  margin-top: 2rem;
`;

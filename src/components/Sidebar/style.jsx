import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 360px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  transform: translateX(-100%);
  overflow: auto;
  background: var(--white);
  color: var(--dark);
  padding: 4rem 1rem;
  box-shadow: 1px 1px 30px var(--dark);
  transition: 0.3s ease-in-out;

  &.active {
    transform: translateX(0%);
  }

  @media (max-width: 860px) {
    width: 100%;
    padding-top: 10rem;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
`;

export const SidebarWindow = styled.div`
  height: 100%;
  background: var(--dark);
  color: var(--white);
  transition: 0.3s ease-in-out;

  &.active {
    margin-left: 350px;
  }

  @media (max-width: 860px) {
    &.active {
      margin-left: 0px;
    }
  }
`;

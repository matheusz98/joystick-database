import styled from "styled-components";
import { CgMenuGridO } from "react-icons/cg";

export const SidebarButton = styled.div``;

export const SidebarIcon = styled(CgMenuGridO)`
  width: 40px;
  height: 40px;
  cursor: pointer;
  color: var(--white);
  background: var(--dark);
  border-radius: 10px;
  transform: translate(50%, 100%);
  position: fixed;
  z-index: 3;
`;

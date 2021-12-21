import styled from "styled-components";
import { Link } from "react-router-dom";
import { BiJoystickAlt } from "react-icons/bi";

export const MenuContainer = styled.div`
  margin-top: 2rem;
`;

export const MenuItem = styled(Link)`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid var(--gray);
  margin: 1.25rem 0;
  font-size: 1.25rem;
  color: var(--dark);
  transition: 0.3s ease-in-out;

  svg {
    color: var(--dark);
  }

  &:hover {
    color: var(--purple);
    border-bottom: 2px solid var(--purple);

    svg {
      transition: 0.3s ease-in-out;
      color: var(--purple);
    }
  }
`;

export const JoystickIcon = styled(BiJoystickAlt)`
  font-size: 2.2rem;
`;

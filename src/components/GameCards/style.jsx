import styled from "styled-components";

export const GameCardsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 4rem;

  @media (max-width: 768px) {
    grid-row-gap: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  }
`;

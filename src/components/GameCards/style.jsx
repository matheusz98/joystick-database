import styled from "styled-components";
import { Link } from "react-router-dom";

export const GameCardsContent = styled(Link)`
  border-radius: 1rem;
  min-height: 60vh;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  position: relative;
  transition: 0.3s ease-in-out;
  color: var(--white);

  &:hover {
    transform: scale(1.06);
  }

  @media (max-width: 768px) {
    &:hover {
      transform: scale(1.02);
    }
  }
`;

export const GameItemCard = styled.div`
  height: 100%;
  border-radius: 1rem;
  position: relative;
`;

export const TitleAndPlatforms = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

export const GameItemInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  position: absolute;
  padding: 1rem;
  background: #4b419bc0;
  border-radius: 0 0 1rem 1rem;
  transition: 0.3s ease-in-out;

  &:hover {
    background: #4b419b;
    transition: 0.3s ease-in-out;
  }
`;

export const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: 300;
`;

export const Platforms = styled.div`
  display: flex;
  flex-wrap: wrap;

  li {
    margin: 0.3rem;
  }

  img {
    width: 32px;
    height: 32px;
  }
`;

export const Score = styled.div`
  font-size: 1.2rem;
  background: #1f1f1f;
  padding: 1rem;
  border-radius: 10px;
`;

export const NotAvailableScore = styled.div`
  background: var(--gray);
  color: var(--lightGray);
  border: 1px solid var(--lightGray);
  padding: 1rem;
  border-radius: 10px;
`;

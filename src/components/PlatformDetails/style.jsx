import styled from "styled-components";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export const PlatformDetailSection = styled.div`
  min-height: 100vh;
  position: relative;
  background-size: cover !important;
  background-position: center top !important;
  background-repeat: no-repeat !important;
  background-attachment: fixed !important;
  padding: 160px 30px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background-image: linear-gradient(to top, #0f0f0f, rgba(#000, 0));
  }
`;

export const PlatformDetailsContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding-top: 5rem;
  position: relative;

  @media (max-width: 768px) {
    max-width: 100%;
    justify-content: center;
    align-items: center;
    margin-left: 0;
    text-align: center;
  }
`;

export const Title = styled.h2`
  font-size: 6rem;
  font-weight: 500;
  letter-spacing: 5px;
  text-align: center;
  border-bottom: 5px solid var(--purple);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Description = styled.p`
  max-width: 960px;
  font-size: 1rem;
  margin-top: 2rem;
`;

export const GoBackButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  cursor: pointer;
  border: 2px solid var(--white);
  background: transparent;
  color: var(--white);
  margin-top: 3rem;
  transition: 0.3s ease-in-out;
  border-radius: 50px;

  &:hover {
    border: 2px solid var(--purple);
    color: var(--purple);
  }

  svg {
    font-size: 1.25rem;
    margin-right: 0.3rem;
  }
`;

export const PlatformDetailsGames = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 7rem 30px 0;
  position: relative;
`;

export const PlatformDetailsItem = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Subtitle = styled.h3`
  font-size: 3rem;
  font-weight: 300;
  letter-spacing: 2px;
  text-align: left;
  border-bottom: 5px solid var(--purple);

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    font-size: 2rem;
    margin: 0 2rem;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    margin: 3rem auto;
  }
`;

export const SliderContent = styled(Slider)`
  width: 100%;

  .slick-track {
    display: flex;
    padding: 2rem;
    gap: 2rem;
  }
  .slick-slide {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }

  .slick-list {
    overflow: hidden;
  }
`;

export const GameCard = styled(Link)`
  width: 100%;
  height: 430px;
  display: flex !important;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  border-radius: 10px;
  transition: 0.3s ease-in-out;
  cursor: pointer;
`;

export const GameCardImage = styled.img`
  height: 100%;
  border-radius: 1rem 1rem 0 0;
  position: relative;
  object-fit: cover;
`;

export const GameCardInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--purple);
  border-radius: 0 0 1rem 1rem;
  padding: 0.5rem;
`;

export const GameCardName = styled.h3`
  font-size: 1.2rem;
  font-weight: 300;
  color: var(--white);
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

export const ScrollToTop = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  transition: 0.5s ease-in-out;
  z-index: 1;
`;

export const ScrollToTopButton = styled.button`
  border-radius: 50%;
  cursor: pointer;
  background: var(--dark);
  padding: 0.5rem;

  svg {
    font-size: 3rem;
    color: var(--white);
    background: transparent;
    transition: 0.3s ease-in-out;

    &:hover {
      transform: scale(1.02);
      color: var(--purple);
    }
  }
`;

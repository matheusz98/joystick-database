import styled from "styled-components";

export const DetailsSection = styled.div`
  min-height: 100vh;
  position: relative;
  background-size: cover !important;
  background-position: center top !important;
  background-repeat: no-repeat !important;
  background-attachment: fixed !important;
  padding: 160px 0;

  @media (max-width: 768px) {
    padding: 160px 30px;
  }

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

export const DetailsContent = styled.div`
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
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-align: center;
`;

export const Developers = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const DevelopersItems = styled.span`
  margin: 0.5rem;
`;

export const Platforms = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const PlatformsItems = styled.span`
  margin: 0.5rem;
`;

export const DetailsContainer = styled.div`
  padding: 220px 0 0;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  position: relative;

  @media (max-width: 768px) {
    max-width: 100%;
    justify-content: center;
    align-items: center;
    margin-left: 0;
    text-align: center;
    padding: 160px 30px 0;
  }
`;

export const DetailsInfoTitle = styled.h2`
  font-size: 3rem;
  font-weight: 200;
  color: var(--white);
  border-bottom: 2px solid var(--purple);
`;

export const DetailsInfoContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  text-align: left;
`;

export const DetailsInfoItems = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin: 1rem 0;
  font-size: 1.4rem;
`;

export const Subtitle = styled.h3``;

export const DetailsItem = styled.p``;

export const CriticScore = styled.a`
  font-size: 1.2rem;
  background: #1f1f1f;
  padding: 1rem;
  border-radius: 10px;
  margin-top: 1rem;
  border: 3px solid var(--white);
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1.12);
    background: transparent;
  }
`;

export const Description = styled.p`
  max-width: 960px;
  font-size: 1rem;
`;

export const ScreenshotContainer = styled.div`
  padding-top: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const ScreenshotGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 7rem;
  gap: 0.625rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 660px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`;

export const ScreenshotItem = styled.div`
  position: relative;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }

  &:nth-child(1) {
    grid-row: span 4;
  }

  &:nth-child(2) {
    grid-row: span 3;
  }

  &:nth-child(3) {
    grid-row: span 2;
  }

  &:nth-child(4) {
    grid-row: span 6;
  }

  &:nth-child(5) {
    grid-row: span 4;
  }

  &:nth-child(6) {
    grid-row: span 4;
  }
`;

export const ScreenshotImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  position: relative;
  object-fit: cover;
  border-radius: 10px;
`;

export const WebsiteLink = styled.a`
  margin-top: 6rem;
  font-size: 2rem;
  color: var(--white);
  font-weight: 600;
  border-bottom: 2px solid var(--purple);
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

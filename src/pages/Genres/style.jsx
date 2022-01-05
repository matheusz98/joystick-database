import styled from "styled-components";
import { Link } from "react-router-dom";

export const GenresSection = styled.section`
  width: 100%;
  max-width: 1200px;
  min-height: 100%;
  padding: 160px 0;
  transition: 0.3s ease-in-out;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 160px 30px;
  }
`;

export const Title = styled.h2`
  font-size: 3.2rem;
  border-bottom: 3px solid var(--purple);
  margin-bottom: 4rem;
  padding-left: 2rem;
  font-weight: 200;
  text-align: left;
  @media (max-width: 480px) {
    font-size: 2.4rem;
  }
`;

export const GenresContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 4rem;
  @media (max-width: 768px) {
    grid-row-gap: 1rem;
  }
  @media (max-width: 360px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

export const GenresCards = styled(Link)`
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

export const GenresItemCard = styled.div`
  height: 100%;
  border-radius: 1rem;
  position: relative;
`;

export const GenreCardInfo = styled.div`
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

export const GenreName = styled.h3`
  font-size: 1.2rem;
  font-weight: 300;
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

import styled from "styled-components";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { BiArrowToLeft } from "react-icons/bi";

export const HomeSection = styled.section`
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

export const SearchContainer = styled.div`
  margin: 4rem 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const HomeContent = styled.div`
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

export const Pagination = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 3rem;
`;

export const NextPage = styled(BsFillArrowRightCircleFill)`
  font-size: 2.5rem;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover {
    transform: scale(1.02);
    color: var(--purple);
  }
`;

export const PrevPage = styled(BsFillArrowLeftCircleFill)`
  font-size: 2.5rem;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover {
    transform: scale(1.02);
    color: var(--purple);
  }
`;

export const FirstPage = styled(BiArrowToLeft)`
  font-size: 2.5rem;
  background: var(--white);
  color: var(--dark);
  border-radius: 50%;
  cursor: pointer;
  padding: 0.3rem;
  transition: 0.3s ease-in-out;
  &:hover {
    transform: scale(1.02);
    color: var(--purple);
  }
`;

export const ScrollToTop = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  transition: 0.5s ease-in-out;
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

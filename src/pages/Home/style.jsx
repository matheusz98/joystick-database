import styled from "styled-components";

export const HomeSection = styled.section`
  width: 100%;
  max-width: 1200px;
  min-height: 100%;
  padding: 13rem 1rem;
  transition: 0.3s ease-in-out;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 3.2rem;
  border-bottom: 3px solid var(--purple);
  margin-bottom: 4rem;
  padding-left: 2rem;
  font-weight: 200;

  @media (max-width: 480px) {
    font-size: 2.8rem;
  }
`;

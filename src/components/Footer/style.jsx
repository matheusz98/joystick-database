import styled from "styled-components";

export const FooterSection = styled.footer`
  max-width: 100%;
  width: 100%;
  background: var(--purple);
  padding-top: 1rem;
`;

export const FooterContainer = styled.div`
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;

export const Copyright = styled.small`
  margin: 0.5rem 0;
`;

export const Source = styled.small`
  margin: 0.5rem 0;
`;

export const SourceLink = styled.a`
  color: var(--white);
`;

export const Profile = styled.a`
  margin: 0.5rem 0;
  font-size: 2rem;
  color: var(--white);
`;

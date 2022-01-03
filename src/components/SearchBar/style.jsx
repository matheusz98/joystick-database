import styled from "styled-components";
import Search from "../../assets/icons/search.svg";
import SearchAlt from "../../assets/icons/search-white.svg";

export const SearchForm = styled.form``;

export const SearchInput = styled.input`
  width: 20vw;
  height: 3rem;
  display: flex;
  align-items: center;
  margin: auto;
  padding: 0.8rem 1.2rem;
  background: var(--white);
  border-radius: 20px;
  font-size: 1rem;
  color: var(--dark);
  transition: 0.3s ease-in-out;

  @media (max-width: 768px) {
    width: 20vw;
    height: 4rem;
    padding: 0;
    background: transparent;
    margin: 0 auto;
  }

  &:focus,
  &:not(:placeholder-shown) {
    width: 30vw;
    @media (max-width: 768px) {
      width: 100%;
      background: var(--white);
      padding: 0.8rem 1.2rem;
    }
  }

  &:not(:focus, :not(:placeholder-shown)) {
    background: url(${Search});
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 1.2rem;
    cursor: pointer;

    @media (max-width: 768px) {
      background: url(${SearchAlt});
      background-size: 2rem;
      background-position: center;
      background-repeat: no-repeat;

      &::placeholder {
        color: transparent;
      }
    }
  }

  &::placeholder {
    color: #cacaca;
    font-size: 1rem;
    font-weight: 200;
  }
`;

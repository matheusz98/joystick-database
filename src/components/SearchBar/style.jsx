import styled from "styled-components";

export const SearchForm = styled.form`
  width: 100%;
  position: relative;
  height: 40px;

  svg {
    font-size: 1.8rem;
    position: absolute;
    top: 50%;
    right: 5%;
    transform: translateY(-50%);
    cursor: pointer;
    color: var(--lightGray);
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 30px;
  background: var(--gray);
  outline: none;
  font-size: 1.125rem;
  padding: 0rem 2.25rem 0rem 1rem;
  color: #becfdb;

  &::placeholder {
    color: #becfdb;
  }
`;

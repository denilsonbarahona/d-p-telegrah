import styled from "styled-components";

const Button = styled.button`
  display: grid;
  gap: 0.5rem;
  cursor: pointer;
  font: var(--body-16regular);
  padding: 0;
  border-radius: 0.5rem;
  background-color: transparent;
  border: none;
  max-inline-size: auto;

  & .selected {
    border-radius: 0.5rem;
    border: 4px solid var(--light-blue);
  }

  & img {
    inline-size: 100%;
    object-fit: scale-down;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export default Button;

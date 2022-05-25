import styled from "styled-components";
import { Link } from "react-router-dom";

export const Anchor = styled(Link)`
  color: var(--light-blue);
  display: grid;
  place-content: center;
  background: transparent;
  cursor: pointer;
  text-decoration: none;
  inline-size: 100%;
`;

export const Container = styled.div`
  &.isSelected {
    inline-size: 2rem;
    block-size: 2rem;
    border-radius: 50%;
    color: var(--white);
    background-color: var(--light-blue);
    display: grid;
    place-items: center;
  }
`;

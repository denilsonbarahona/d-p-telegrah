import styled from "styled-components";

export const Button = styled.button`
  padding: 0;
  background-color: #4285f4;
  border: 1px solid #4285f4;
  border-radius: 2px;
  overflow: hidden;

  &:hover,
  &:focus {
    background-color: #336fd4;
  }
`;

export const Figure = styled.figure`
  display: flex;
  gap: 1.125rem;
  align-items: center;
  margin: 0;
  block-size: inherit;
`;

export const FigCaption = styled.figcaption`
  margin: 0;
  color: var(--white);
  font-family: Roboto;
  font-weight: 500;
  padding-right: 1.125rem;
`;

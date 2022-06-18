import styled from "styled-components";

export const Figure = styled.figure`
  inline-size: 3rem;
  block-size: 3rem;
  border-radius: 50%;
  overflow: hidden;
  margin: 0;
  flex-shrink: 0;

  &.small {
    inline-size: 2rem;
    block-size: 2rem;
  }
`;

export const Image = styled.img`
  inline-size: 100%;
  block-size: 100%;
  vertical-align: middle;
`;

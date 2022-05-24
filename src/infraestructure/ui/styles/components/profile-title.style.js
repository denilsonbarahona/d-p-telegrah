import styled from "styled-components";

const Title = styled.h2`
  margin: 0;
  display: inline-block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font: var(--body-16regular);
  color: var(--black);

  &.isRed {
    color: var(--light-red);
  }
  &.isBlue {
    color: var(--light-blue);
  }
`;

export default Title;

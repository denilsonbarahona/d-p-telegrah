import styled from "styled-components";

const Paragraph = styled.p`
  margin: 0;
  display: inline-block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: var(--black);

  &.base {
    font: var(--caption-12regular);
  }
  &.isGray {
    color: var(--light-grey-1);
  }
  &.isRed {
    color: var(--light-red);
  }
`;

export default Paragraph;

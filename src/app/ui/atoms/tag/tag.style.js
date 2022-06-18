import styled from "styled-components";

const DateTag = styled.p`
  inline-size: fit-content;
  background-color: ${(props) => props.theme.tag};
  color: var(${(props) => props.theme.BaseTextColor});
  border-radius: 0.5rem;
  padding: 0.25rem;
  font: var(--body-16regular);
  font-size: 0.8rem;
  box-shadow: 1px 0 2px 1px ${(props) => props.theme.shadow};
  margin: 1rem auto;
`;

export default DateTag;

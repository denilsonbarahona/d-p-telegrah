import styled from "styled-components";

const Dialog = styled.dialog`
  background-color: var(${props=>props.theme.background});
  border: none;
  padding: 1.5rem;
  border-radius: 1rem;
  filter: drop-shadow(0 2px 2px var(${props=>props.theme.shadow}));

  &::backdrop {
    background-color: ${props=>props.theme.backdrop};
  }
`;

export default Dialog;

import styled from "styled-components";

export const MessageContainer = styled.form`
  display: flex;
  gap: 1rem;
  padding-block: 1rem;
  padding-inline: 0.5rem;
  font-size: 1rem;
  box-shadow: 1px 0 2px 1px ${(props) => props.theme.shadow};
  color: var(${(props) => props.theme.BaseTextColor});
`;

export const Button = styled.button`
  display: grid;
  place-items: center;
  padding-left: 0.6rem;
  box-sizing: border-box;
  background-color: transparent;
  font-size: 1.2rem;
  aspect-ratio: 1;
  border-radius: 50%;
  border: none;
  color: var(${(props) => props.theme.BaseTextColor});

  &:hover {
    background-color: ${(props) => props.theme.hover};
  }
`;

export const TextArea = styled.textarea`
  flex: 1;
  border: none;
  background-color: var(${(props) => props.theme.background});
  color: var(${(props) => props.theme.BaseTextColor});
  font: var(--body-16regular);
  padding: 0;
`;

export const MessageAction = styled.div`
  align-self: center;
  display: flex;
  gap: 1rem;
`;

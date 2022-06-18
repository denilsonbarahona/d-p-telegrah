import styled from "styled-components";

export const MessageContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding-block: 1rem;
  padding-inline: 0.5rem;
  font-size: 1rem;
  box-shadow: 1px 0 2px 1px ${props => props.theme.shadow};
  color: var(${props=>props.theme.BaseTextColor});
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1rem;
  color: var(${props=>props.theme.BaseTextColor});
  cursor: pointer;
`;

export const TextArea = styled.textarea`
  flex: 1;
  border: none;
  background-color: var(${props=>props.theme.background});
  color: var(${props=>props.theme.BaseTextColor});
  font: var(--body-16regular);
  padding: 0;
`;

export const MessageAction = styled.div`
  align-self: center;
  display: flex;
  gap: 1rem;

  & * {
    cursor: pointer;
  }
`;

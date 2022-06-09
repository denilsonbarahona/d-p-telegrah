import styled from "styled-components";

export const MessageContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding-block: 1rem;
  padding-inline: 0.5rem;
  box-shadow: 1px 0 2px 1px #ededed;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const TextArea = styled.textarea`
  flex: 1;
  border: none;
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

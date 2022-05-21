import styled from "styled-components";

export const MessageContainer = styled.div`
  display: flex;
  gap: 1rem;
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

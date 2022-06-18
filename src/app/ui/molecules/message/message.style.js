import styled from "styled-components";

export const MessageContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const MessageBody = styled.div`
  display: grid;
  gap: 0.25rem;
  flex: 1;
`;

export const Article = styled.article`
  font: var(--body-16regular);
  color: var(${props => props.theme.BaseTextColor});
`;

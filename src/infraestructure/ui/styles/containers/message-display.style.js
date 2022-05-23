import styled from "styled-components";

export const Main = styled.main`
  display: grid;
  grid-template-rows: 5rem 1fr 4rem;
  block-size: 100vh;
`;

export const MessageContainer = styled.div`
  padding: 1rem;
  display: grid;
  gap: 1rem;
  overflow-y: auto;
`;

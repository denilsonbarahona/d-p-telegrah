import styled from "styled-components";

export const Main = styled.main`
  grid-template-rows: 5rem 1fr 4rem;
  block-size: 100vh;
  display: none;

  @media screen and (min-width: 1024px) {
    & {
      display: grid;
    }
  }
`;

export const MessageContainer = styled.div`
  padding: 1rem;
  display: grid;
  gap: 1rem;
  overflow-y: auto;
`;

import styled from "styled-components";

export const ContactContainer = styled.div`
  cursor: pointer;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 1rem;
  border-block-end: 1px solid var(--light-grey-2);

  & div:nth-of-type(1) {
    flex: 1;
  }
`;

export const ContactContent = styled.div`
  display: grid;
  gap: 0.25rem;
`;

export const ContactNotification = styled.div`
  display: grid;
  place-items: center;
  gap: 0.25rem;
`;

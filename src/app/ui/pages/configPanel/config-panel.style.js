import styled from "styled-components";

export const Title = styled.h2`
  font: var(--body-16bold);
  color: var(${(props) => props.theme.BaseTextColor});
`;

export const TitleContainer = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 0.25rem;
  gap: 0.5rem;
`;

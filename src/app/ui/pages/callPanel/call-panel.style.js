import styled from "styled-components";

export const PanelTitle = styled.h2`
  font: var(--body-16bold);
  color: var(${(props) => props.theme.BaseTextColor});
`;

export const TitleContainer = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  border-block-end: 1px solid var(${(props) => props.theme.divider});
`;

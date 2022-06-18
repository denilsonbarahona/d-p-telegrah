import styled from "styled-components";

const Container = styled.aside`
  display: grid;
  grid-template-rows: 5rem 1fr 4rem;
  block-size: 100vh;
  border-inline-end: 1px solid var(${(props) => props.theme.divider});

  @media (max-width: 1024px) {
    & {
      display: ${(props) => (props.hide ? "none" : "grid")};
    }
  }
`;

export default Container;

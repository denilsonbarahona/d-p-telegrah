import styled from "styled-components";

const Container = styled.aside`
  display: grid;
  grid-template-rows: 5rem 1fr 4rem;
  block-size: 100vh;
  border-inline-end: 1px solid var(--light-grey-2);
`;

export default Container;

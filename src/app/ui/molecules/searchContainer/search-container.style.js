import styled from "styled-components";

const Container = styled.div`
  background-color: var(${(props) => props.theme.searchContainer});
  padding: 1rem;
  box-shadow: 0px 0 2px -1px ${(props) => props.theme.shadow};
`;

export default Container;

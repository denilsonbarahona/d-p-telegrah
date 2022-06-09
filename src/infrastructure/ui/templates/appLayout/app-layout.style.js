import styled from "styled-components";

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  block-size: 100vh;

  @media screen and (min-width: 1024px) {
    & {
      grid-template-columns: minmax(330px, 439px) minmax(694px, 1fr);
    }
  }
`;

export default Layout;

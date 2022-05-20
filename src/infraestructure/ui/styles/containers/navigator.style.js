import styled from "styled-components";

const Nav = styled.nav`
  padding: 1rem;

  & ul {
    display: flex;
    gap: 1rem;
    padding: 0;
    margin: 0;
    align-items: center;
    justify-content: space-between;
  }

  & li {
    list-style: none;
    cursor: pointer;
    inline-size: 100%;
  }
`;

export default Nav;

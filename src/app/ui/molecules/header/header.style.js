import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  padding: 1rem;
  align-items: center;
  gap: 0.5rem;
  justify-content: space-between;
  box-shadow: 1px 0 2px 1px ${(props) => props.theme.shadow};
`;

export const ProfileInfo = styled.div`
  display: grid;
  gap: 0.25rem;
  flex: 1;
`;

export const Button = styled.button`
  font-size: 1.5rem;
  color: var(--light-blue);
  cursor: pointer;
  background-color: transparent;
  display: grid;
  place-items: center;
  border: none;

  @media screen and (min-width: 1024px) {
    & {
      display: none;
    }
  }
`;

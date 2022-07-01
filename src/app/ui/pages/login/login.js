import styled from "styled-components";
import Login from "@Images/login_background.webp";

export const Container = styled.div`
  block-size: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 1024px) {
    & {
      grid-template-columns: 1fr 45%;
    }
  }
`;

export const BackgroundColum = styled.div`
  inline-size: 100%;
  background-repeat: repeat;
  block-size: 100%;
  background-image: url(${Login});
  background-color: #a2c6e8;
  background-blend-mode: multiply;
  filter: drop-shadow(2px 2px 2px red) blur(2px);
  display: none;
  @media screen and (min-width: 1024px) {
    & {
      display: inline-block;
    }
  }
`;

export const SideLogin = styled.div`
  box-sizing: border-box;
  padding: 1rem;
  inline-size: 100%;
  place-self: center;
  display: grid;
  place-items: center;

  @media screen and (min-width: 1024px) {
    & {
      inline-size: 75%;
    }
  }
`;

export const Title = styled.h1`
  font: var(--body-16bold);
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  color: var(${(props) => props.theme.title});
`;

export const Paragraph = styled.p`
  font: var(--body-16regular);
  font-size: 0.9rem;
  color: var(${(props) => props.theme.title});
`;

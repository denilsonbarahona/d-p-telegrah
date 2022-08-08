import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas : "header" "right";
    font: var(--body-16regular);
    @media screen and (min-width: 1024px) {
        & {
            grid-template-columns: 200px 1fr;
            grid-template-areas : "header header" "left right";
        }
    }
`;

export const Header = styled.header`
    grid-area: header;
    background-color: var(${(props) => props.theme.searchContainer});
    height: 50px;
`;

export const Aside = styled.aside`
    grid-area: left;
    display: none;
    background-color: red;
    height: 100%;
    inline-size: 100%;

    @media screen and (min-width: 1024px) {
        & {
            display: inline-block;
        }
    }
`;

export const Main = styled.main`
    grid-area: right;
    background-color: blue;
    inline-size: 100%;
    padding: 20px;
    position: relative;
    box-sizing: border-box;
`;

export const LocalVideo = styled.video`
    position: absolute;
    top: 20px;
    left: 20px;
    inline-size: 150px;
    height: 200px;
    background-color: black;
    border-radius: 10px;
`;

export const RemoteVideo = styled.video`
    inline-size: 100%;
  /*   block-size: 100vh; */
    background-color: yellow;
    border-radius: 10px;

    @media screen and (min-width: 1024px) {
        & {
           /*  block-size: 100%; */
        }
    }
`;
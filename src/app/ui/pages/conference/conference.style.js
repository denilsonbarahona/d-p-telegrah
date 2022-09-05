import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas : "header" "right";
    font: var(--body-16regular);
    @media screen and (min-width: 1024px) {
        & {
            grid-template-columns: 150px 1fr;
            grid-template-areas : "left header" "left right";
        }
    }
`;

export const Header = styled.header`
    grid-area: header;
    border-block-end: 1px solid var(${(props) => props.theme.divider});
    height: 50px;
    z-index: 100;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    display: flex;
    gap: 15px;
    align-items: center;
    box-sizing: border-box;
    padding-inline: 20px;

    & svg {
        vertical-align: middle;
    }
`;

export const Aside = styled.aside`
    grid-area: left;
    display: none;
    border-inline-end: 1px solid var(${(props) => props.theme.divider});
    z-index: 100;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    height: 100%;
    inline-size: 100%;
    box-sizing: border-box;
    @media screen and (min-width: 1024px) {
        & {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            padding-block: 5rem;
        }
    }
`;

export const Main = styled.main`
    grid-area: right;
    background-color: var(${(props) => props.theme.searchContainer}); 
    inline-size: 100%;
    padding: 30px;
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

export const ActionsContainer = styled.div`
    position: absolute;
    inset-inline-start: 50%;
    inset-block-end: 100px;
    transform: translate(-50%, 0);
`;

export const Actions = styled.button`
    inline-size: 50px;
    block-size: 50px;
    border-radius: 50%;
    border: none;
    margin: 5px;
    font-size: 1rem;
    color: white;
    box-sizing: border-box;
    background-color: ${(props) => props.bgButton};
`;

export const BackwardAction = styled.button`
    font-size: 1.5rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

export const RemoteVideo = styled.video`
    inline-size: 100%;
    block-size: 100vh;
    background-color: black;
    border-radius: 10px;
    object-fit: cover;
    aspect-ratio: 9/16;

    @media screen and (min-width: 1024px) {
        & {
           object-fit: unset;
           aspect-ratio: 16/9;      
        }
    }
`;

export const LogoContainer = styled.div`
    display: grid;
    place-items: center;
`;

export const LogoText = styled.h2`
  font: var(--body-14bold);
  text-align: center;
  font-size: 1rem;
  color: var(--light-blue);
`;

export const UserLogoContainer = styled.div`
  font-size: 3rem;
  color: var(--light-blue);
`;
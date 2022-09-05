import styled from "styled-components";

export const PlaceHolderContainer = styled.div`
    display: grid;
    place-items: center;
`;

export const PlaceHolderText = styled.h1`
  font: var(--body-16bold);
  text-align: center;
  font-size: 2rem;
  color: var(--light-blue);
`;


export const PlaceHolderImg = styled.img`
    object-fit: scale-down;
    max-inline-size: 200px;
    max-block-size: 200px;
`;
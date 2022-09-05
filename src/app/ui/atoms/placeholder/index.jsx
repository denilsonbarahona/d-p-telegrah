import React from "react";
import {
PlaceHolderContainer,
PlaceHolderImg,
PlaceHolderText } from "./placeholder.style";

const Placeholder = () => {
    return (
        <PlaceHolderContainer>
          <div>
            <PlaceHolderImg width='200' height='200' alt="telegraph icon" src="https://i.imgur.com/6lugcDA.png" />  
            <PlaceHolderText>Telegraph</PlaceHolderText>
          </div>
        </PlaceHolderContainer>
    );
};

export default Placeholder;
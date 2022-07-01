import React from "react";
import google from "@Images/g-logo.webp";
import login from "@Redux/features/auth/actions";
import { signInWithPopup, auth, provider } from "@/app/config/firebase";
import { useDispatch } from "react-redux";
import { Figure, Button, FigCaption } from "./google.style";

const Google = () => {

  const dispatch = useDispatch();

  const handleLoginClick = async () => {
    const credentials = await signInWithPopup(auth, provider);
    const {user: {displayName: name, email, photoURL: image}} = credentials;
    dispatch(login({name, email, image}));
  };


  return (
    <Button type="button" onClick={handleLoginClick}>
      <Figure>
        <img src={google} width="30px" height="30px" alt="google" />
        <FigCaption>Sign in with Google</FigCaption>
      </Figure>
    </Button>
  );
};

export default Google;

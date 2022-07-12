import React, { useEffect } from "react";
import Google from "@atoms/google";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Container,
  BackgroundColum,
  SideLogin,
  Title,
  Paragraph,
} from "./login";

const Login = () => {
  const navigate = useNavigate();
  const { isLoaded } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isLoaded) navigate("/");
  }, [isLoaded]);

  return (
    <main>
      <Container>
        <BackgroundColum />
        <SideLogin>
          <div>
            <Title>Welcome to Telegraph</Title>
            <Paragraph>
              Sorry for the inconvenience, we only ask for this to make sure
              everyone in the app is human
            </Paragraph>
            <Google />
          </div>
        </SideLogin>
      </Container>
    </main>
  );
};

export default Login;

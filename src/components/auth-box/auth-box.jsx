import React, { Fragment, useContext } from "react";
import { UserContext } from "../../contexts/user-context";
import { SignOutUser } from "../../utils/firebase/auth";
import { useNavigate } from "react-router-dom";
import RenderIf from "../render-if/render-if";
import Button from "../button/button";
import LoginForm from "../login-form/login-form";
import { AuthBoxContainer, Title, SignUpMessage } from "./auth-box.styles";

function AuthBox({ insideRef, shouldDisplay }) {
  const { user } = useContext(UserContext);

  const navigate = useNavigate();
  const ToAuthPageHandler = () => navigate("sign-up");

  const noUserLoggedIn = (
    <Fragment>
      <Title>Login</Title>

      <LoginForm />

      <SignUpMessage>
        Don't have an account yet?
        <Button buttonStyle='normal' onClick={ToAuthPageHandler}>
          sign up
        </Button>
      </SignUpMessage>
    </Fragment>
  );

  const userLoggedIn = (
    <Fragment>
      <Title>Hello, {user ? user.displayName : "there"}!</Title>

      <Button buttonStyle='normal' onClick={() => SignOutUser()}>
        log out
      </Button>
    </Fragment>
  );

  return (
    <AuthBoxContainer shouldDisplay={shouldDisplay} ref={insideRef}>
      <RenderIf condition={!user}>{noUserLoggedIn}</RenderIf>

      <RenderIf condition={user}>{userLoggedIn}</RenderIf>
    </AuthBoxContainer>
  );
}

export default AuthBox;

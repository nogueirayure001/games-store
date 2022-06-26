import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/user.selectors";
import { SignOutUser } from "../../utils/firebase/auth";
import { useNavigate } from "react-router-dom";
import RenderIf from "../render-if/render-if";
import Button from "../button/button";
import LoginForm from "../login-form/login-form";
import { AuthBoxContainer, Title, SignUpMessage } from "./auth-box.styles";

function AuthBox({ insideRef, shouldDisplay }) {
  const user = useSelector(selectUser);
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
        sign out
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

import React, { useState } from "react";
import {
  SignInUser,
  FIREBASE_SIGNIN_ERRORS,
  signInWithGooglePopUp,
  FIREBASE_POPUP_SIGNIN_ERRORS,
} from "../../utils/firebase/auth";
import RenderIf from "../render-if/render-if";
import Button from "../button/button";
import FormInput from "../form-input/form-input";
import LoadingLittle from "../loading-little/loading-little";
import {
  Form,
  InputFields,
  AlternativeAuth,
  ErrorCode,
} from "./login-form.styles";

const SIGNIN_ERRORS = {
  ...FIREBASE_SIGNIN_ERRORS,
  ...FIREBASE_POPUP_SIGNIN_ERRORS,
};

function LoginForm() {
  const [fields, setFields] = useState({ email: "", pwd: "" });
  const [errorCode, setErrorCode] = useState(null);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const fieldChangeHandler = (event) => {
    const { name, value } = event.target;

    setFields({ ...fields, [name]: value });
  };

  const loginWithEmailAndPasswordHandler = async (event) => {
    event.preventDefault();

    setErrorCode(null);

    const { email, pwd } = fields;

    try {
      setLoading(true);
      await SignInUser(email, pwd);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (Object.hasOwn(FIREBASE_SIGNIN_ERRORS, error.code)) {
        setErrorCode(error.code);
      }
    }
  };

  const loginWithGoogleHandler = async () => {
    setErrorCode(null);

    try {
      setGoogleLoading(true);
      await signInWithGooglePopUp();
      setGoogleLoading(false);
    } catch (error) {
      setGoogleLoading(false);
      if (Object.hasOwn(FIREBASE_POPUP_SIGNIN_ERRORS, error.code)) {
        setErrorCode(error.code);
      }
    }
  };

  return (
    <Form onSubmit={loginWithEmailAndPasswordHandler} noValidate>
      <InputFields>
        <FormInput
          label='E-mail'
          id='email'
          name='email'
          type='email'
          shrink={fields.email.length}
          onChange={fieldChangeHandler}
        />

        <FormInput
          label='Password'
          id='pwd'
          name='pwd'
          type='password'
          shrink={fields.pwd.length}
          onChange={fieldChangeHandler}
        />
      </InputFields>

      <RenderIf condition={errorCode}>
        <ErrorCode>{SIGNIN_ERRORS[errorCode]}</ErrorCode>
      </RenderIf>

      <Button type='submit' buttonStyle='normal' position='relative' keepHeight>
        {loading ? <LoadingLittle /> : "sign in"}
      </Button>

      <AlternativeAuth>
        or
        <Button
          type='button'
          buttonStyle='googleColors'
          position='relative'
          keepHeight
          onClick={loginWithGoogleHandler}
        >
          {googleLoading ? <LoadingLittle /> : "sign in with google"}
        </Button>
      </AlternativeAuth>
    </Form>
  );
}

export default LoginForm;

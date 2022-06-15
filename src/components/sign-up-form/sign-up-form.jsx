import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import RenderIf from "../render-if/render-if";
import Button from "../button/button";
import FormInput from "../form-input/form-input";
import LoadingLittle from "../loading-little/loading-little";
import {
  checkMatchedInputs,
  checkInputsValidity,
} from "../../utils/helper-functions";
import { DEFAULT_REGEXP, PASSWORD_GUIDE } from "../../utils/regexp";
import {
  signUpNewUser,
  FIREBASE_SIGNUP_ERRORS,
} from "../../utils/firebase/auth";
import { Form, InputFields, ErrorCode } from "./sign-up-form.styles";

const SIGNUP_ERRORS = {
  ...FIREBASE_SIGNUP_ERRORS,
  EmailsDoNotMatch: "E-mails do not match",
  PasswordsDoNotMatch: "Passwords do not match",
  EmailsAndPasswordsDoNotMatch: `
  E-mails and passwords do not match
  `,
};

const INPUT_PAIRS = [
  { input: ["email", "confirmEmail"], fieldsLabel: "E-mails" },
  { input: ["pwd", "confirmPwd"], fieldsLabel: "Passwords" },
];

const DEFAULT_FIELDS_STATE = {
  username: "",
  email: "",
  confirmEmail: "",
  pwd: "",
  confirmPwd: "",
};

function SignUpForm() {
  const [fields, setFields] = useState(DEFAULT_FIELDS_STATE);
  const [submitted, setSubmitted] = useState(false);
  const [errorCode, setErrorCode] = useState(null);
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const navigate = useNavigate();

  const fieldChangeHandler = (event) => {
    const { name, value } = event.target;

    setFields({ ...fields, [name]: value });
  };

  const redirectToHomepage = () => navigate("/");

  const signUpNewUserHandler = async (event) => {
    event.preventDefault();

    if (!submitted) setSubmitted(true);

    setErrorCode(null);

    const inputsValid = checkInputsValidity(formRef.current);
    const { inputsMatch, unmatchedFields } = checkMatchedInputs(
      INPUT_PAIRS,
      fields
    );

    if (inputsValid && inputsMatch) {
      const { email, pwd, username } = fields;

      try {
        setLoading(true);
        await signUpNewUser(email, pwd, { displayName: username });
        setLoading(false);
        redirectToHomepage();
      } catch (error) {
        setLoading(false);
        if (Object.hasOwn(SIGNUP_ERRORS, error.code)) {
          setErrorCode(error.code);
        }
      }
    } else if (inputsValid && !inputsMatch) {
      if (
        unmatchedFields.includes("E-mails") &&
        unmatchedFields.includes("Passwords")
      ) {
        setErrorCode("EmailsAndPasswordsDoNotMatch");
      } else if (unmatchedFields.includes("E-mails")) {
        setErrorCode("EmailsDoNotMatch");
      } else if (unmatchedFields.includes("Passwords")) {
        setErrorCode("PasswordsDoNotMatch");
      }
    }
  };

  return (
    <Form onSubmit={signUpNewUserHandler} ref={formRef} noValidate>
      <InputFields>
        <FormInput
          label='User Name'
          id='username'
          name='username'
          type='text'
          shrink={fields.username.length}
          onChange={fieldChangeHandler}
          pattern={DEFAULT_REGEXP.text}
          submitted={submitted}
          errorMessage='Enter a valid username'
          required
        />

        <FormInput
          label='E-mail'
          id='sEmail'
          name='email'
          type='email'
          shrink={fields.email.length}
          onChange={fieldChangeHandler}
          pattern={DEFAULT_REGEXP.email}
          submitted={submitted}
          errorMessage='Enter a valid E-mail'
          required
        />

        <FormInput
          label='Confirm E-mail'
          id='confirmSEmail'
          name='confirmEmail'
          type='email'
          shrink={fields.confirmEmail.length}
          onChange={fieldChangeHandler}
          pattern={DEFAULT_REGEXP.email}
          submitted={submitted}
          errorMessage='Enter a valid E-mail'
          required
        />

        <FormInput
          label='Password'
          id='sPwd'
          name='pwd'
          type='password'
          shrink={fields.pwd.length}
          onChange={fieldChangeHandler}
          pattern={DEFAULT_REGEXP.password}
          submitted={submitted}
          errorMessage='Unsafe password'
          inputGuide={PASSWORD_GUIDE}
          required
        />

        <FormInput
          label='Confirm Password'
          id='confirmSPwd'
          name='confirmPwd'
          type='password'
          shrink={fields.confirmPwd.length}
          onChange={fieldChangeHandler}
          pattern={DEFAULT_REGEXP.password}
          submitted={submitted}
          errorMessage='Unsafe password'
          inputGuide={PASSWORD_GUIDE}
          required
        />
      </InputFields>

      <RenderIf condition={errorCode}>
        <ErrorCode>{SIGNUP_ERRORS[errorCode]}</ErrorCode>
      </RenderIf>

      <Button
        type='submit'
        buttonStyle='normal'
        keepHeight
        position={"relative"}
      >
        {loading ? <LoadingLittle /> : "sign up"}
      </Button>
    </Form>
  );
}

export default SignUpForm;

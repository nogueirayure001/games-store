import React, { useState, useRef } from "react";
import Button from "../button/button";
import FormInput from "../form-input/form-input";
import { checkMatchedInputs } from "../../utils/helper-functions";
import { signUpNewUser, SIGNUP_ERRORS } from "../../utils/firebase/auth";
import { Form, InputFields } from "./sign-up-form.styles";

const DEFAULT_FIELDS_STATE = {
  userName: "",
  email: "",
  confirmEmail: "",
  pwd: "",
  confirmPwd: "",
};

const INPUT_PAIRS = [
  ["email", "confirmEmail"],
  ["pwd", "confirmPwd"],
];

function SignUpForm() {
  const [fields, setFields] = useState(DEFAULT_FIELDS_STATE);
  const [errorCode, setErrorCode] = useState(null);

  const [loading, setLoading] = useState(false);

  const formRef = useRef(null);

  const fieldChangeHandler = (event) => {
    const { name, value } = event.target;

    setFields({ ...fields, [name]: value });
  };

  const clearInputFields = () => {
    for (const element of formRef.current) {
      if (element.tagName === "INPUT") {
        element.value = "";
      }
    }
    setFields(DEFAULT_FIELDS_STATE);
  };

  const signUpNewUserHandler = async (event) => {
    event.preventDefault();

    const inputsMatch = checkMatchedInputs(INPUT_PAIRS, fields);

    const { email, pwd, userName } = fields;

    if (inputsMatch) {
      try {
        setLoading(true);
        await signUpNewUser(email, pwd, { displayName: userName });
        setLoading(false);
        clearInputFields();
      } catch (error) {
        setLoading(false);
        setErrorCode(error.code);
      }
    }
  };

  return (
    <Form onSubmit={signUpNewUserHandler} ref={formRef}>
      <InputFields>
        <FormInput
          label='User Name'
          id='userName'
          name='userName'
          type='text'
          shrink={fields.userName.length}
          onChange={fieldChangeHandler}
        />

        <FormInput
          label='E-mail'
          id='sEmail'
          name='email'
          type='email'
          shrink={fields.email.length}
          onChange={fieldChangeHandler}
        />

        <FormInput
          label='Confirm E-mail'
          id='confirmSEmail'
          name='confirmEmail'
          type='email'
          shrink={fields.confirmEmail.length}
          onChange={fieldChangeHandler}
        />

        <FormInput
          label='Password'
          id='sPwd'
          name='pwd'
          type='password'
          shrink={fields.pwd.length}
          onChange={fieldChangeHandler}
        />

        <FormInput
          label='Confirm Password'
          id='confirmSPwd'
          name='confirmPwd'
          type='password'
          shrink={fields.confirmPwd.length}
          onChange={fieldChangeHandler}
        />
      </InputFields>

      {errorCode && <p>{SIGNUP_ERRORS[errorCode]}</p>}

      <Button type='submit' buttonStyle='normal'>
        {loading ? "loading..." : "sign up"}
      </Button>
    </Form>
  );
}

export default SignUpForm;

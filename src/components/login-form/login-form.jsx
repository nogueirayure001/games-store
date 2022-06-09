import React, { useState } from "react";
import { SignInUser } from "../../utils/firebase/auth";
import Button from "../button/button";
import FormInput from "../form-input/form-input";
import { Form, InputFields, AlternativeAuth } from "./login-form.styles";

function LoginForm() {
  const [fields, setFields] = useState({
    email: "",
    pwd: "",
  });

  const [loading, setLoading] = useState(false);

  const fieldChangeHandler = (event) => {
    const { name, value } = event.target;

    setFields({ ...fields, [name]: value });
  };

  const loginWithEmailAndPasswordHandler = async (event) => {
    event.preventDefault();

    const { email, pwd } = fields;

    try {
      setLoading(true);
      await SignInUser(email, pwd);
      setLoading(false);
    } catch (error) {
      // deal with erroros
    }
  };

  return (
    <Form onSubmit={loginWithEmailAndPasswordHandler}>
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

      <Button type='submit' buttonStyle='normal'>
        {loading ? "loading" : "sing in"}
      </Button>

      <AlternativeAuth>
        or
        <Button buttonStyle='googleColors'>login with google</Button>
      </AlternativeAuth>
    </Form>
  );
}

export default LoginForm;

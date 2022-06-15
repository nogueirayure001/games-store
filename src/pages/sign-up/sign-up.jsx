import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/user-context";
import SignUpForm from "../../components/sign-up-form/sign-up-form";
import { SignUpContainer, Title } from "./sign-up.styles";

function SignUp() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  if (user) {
    navigate("/");
  }

  return (
    <SignUpContainer>
      <Title>sign up</Title>

      <SignUpForm />
    </SignUpContainer>
  );
}

export default SignUp;

import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/user.selectors";
import { useNavigate } from "react-router-dom";
import SignUpForm from "../../components/sign-up-form/sign-up-form";
import { SignUpContainer, Title } from "./sign-up.styles";

function SignUp() {
  const user = useSelector(selectUser);
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

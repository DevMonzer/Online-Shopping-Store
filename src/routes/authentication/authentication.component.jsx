import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import { AuthenticationContainer, MarginBottom } from "./authentication.styles";

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      {/* <MarginBottom />
      <SignUpForm /> */}
    </AuthenticationContainer>
  );
};

export default Authentication;

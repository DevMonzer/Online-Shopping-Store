import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import {
  SignUpContainer,
  Margin,
  LinkStyle,
  Center,
} from "./sign-up-form.styles";
import { signUpStart } from "../../store/user/user.action";

import { selectCurrentUser } from "../../store/user/user.selector";

import { Link, useNavigate } from "react-router-dom";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));
      resetFormFields();
      // redirect to /shop if user signed in successfully
      navigate("/shop");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <Margin>
        <h2>Don't have an account?</h2>
        <span>Sign up with your email and password</span>
      </Margin>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Center>
          <Button type="submit">Sign Up</Button>
        </Center>
        <Link className="link-style" to="/sign-in">
          <LinkStyle>Go to sign in page</LinkStyle>
        </Link>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;

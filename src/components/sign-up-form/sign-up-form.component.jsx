import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { ReactComponent as EyeOpen } from "../../assets/eye-fill.svg";
import { ReactComponent as EyeClose } from "../../assets/eye-slash-fill.svg";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { signUpStart } from "../../store/user/user.action";

import { selectCurrentUser } from "../../store/user/user.selector";

import {
  SignUpContainer,
  Margin,
  LinkStyle,
  Center,
  PasswordContainer,
  ShowPassword,
} from "./sign-up-form.styles";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    if (currentUser) navigate("/shop");
  }, [currentUser, navigate]);

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

    if (password.length < 8) {
      alert("password should be at least 8 characters");
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));
      resetFormFields();
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

  //////////////////////////////////////////////////
  ////// Show and hide password functionality //////
  const [passwordType, setPasswordType] = useState("password");

  const togglePassword = (e) => {
    e.preventDefault();

    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  //////////////////////////////////////////////////

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

        <PasswordContainer>
          <FormInput
            type={passwordType}
            onChange={handleChange}
            value={password}
            name="password"
            label="Password"
            required
          />
          <ShowPassword onClick={togglePassword}>
            {passwordType === "password" ? (
              <span>
                <EyeOpen />
              </span>
            ) : (
              <span>
                <EyeClose />
              </span>
            )}
          </ShowPassword>
        </PasswordContainer>

        <PasswordContainer>
          <FormInput
            type={passwordType}
            onChange={handleChange}
            value={confirmPassword}
            name="confirmPassword"
            label="Confirm Password"
            required
          />
          <ShowPassword onClick={togglePassword}>
            {passwordType === "password" ? (
              <span>
                <EyeOpen />
              </span>
            ) : (
              <span>
                <EyeClose />
              </span>
            )}
          </ShowPassword>
        </PasswordContainer>

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

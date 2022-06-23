import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { ReactComponent as EyeOpen } from "../../assets/eye-fill.svg";
import { ReactComponent as EyeClose } from "../../assets/eye-slash-fill.svg";

import {
  SignInContainer,
  ButtonsContainer,
  Margin,
  LinkStyle,
} from "./sign-in-form.styles";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action";

import { selectCurrentUser } from "../../store/user/user.selector";

import { Link, useNavigate } from "react-router-dom";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    if (currentUser) navigate("/shop");
  }, [currentUser, navigate]);

  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      console.log("user sign in failed", error);
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
    <SignInContainer>
      <Margin>
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>
      </Margin>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        {/* <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        /> */}

        <div className="passwordContainer">
          <FormInput
            type={passwordType}
            onChange={handleChange}
            value={password}
            name="password"
            label="Password"
            required
          />
          <p className="showPassword" onClick={togglePassword}>
            {passwordType === "password" ? (
              <span>
                <EyeOpen />
              </span>
            ) : (
              <span>
                <EyeClose />
              </span>
            )}
          </p>
        </div>
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={signInWithGoogle}
          >
            Sign In With Google
          </Button>
        </ButtonsContainer>
        <Link className="link-style" to="/sign-up">
          <LinkStyle>Don't have an account?</LinkStyle>
        </Link>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;

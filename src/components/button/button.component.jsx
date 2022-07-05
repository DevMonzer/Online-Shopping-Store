import {
  BaseButton,
  GoogleSignInButton,
  FacebookSignInButton,
  InvertedButton,
  LoadingSpinner,
  YellowButton,
} from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  facebook: "facebook-sign-in",
  inverted: "inverted",
  yellow: "YellowButton",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.yellow]: YellowButton,
    [BUTTON_TYPE_CLASSES.facebook]: FacebookSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, isLoading = false, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <LoadingSpinner /> : children}
    </CustomButton>
  );
};

export default Button;

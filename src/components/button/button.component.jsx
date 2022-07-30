import Spinner from "../loading-spinner/loading-spinner.component";
import {
  BaseButton,
  BlackButton,
  RedButton,
  WhiteButton,
} from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  red: "red-button",
  black: "black-button",
  white: "white-button",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
({
  [BUTTON_TYPE_CLASSES.base]: BaseButton,
  [BUTTON_TYPE_CLASSES.black]: BlackButton,
  [BUTTON_TYPE_CLASSES.white]: WhiteButton,
  [BUTTON_TYPE_CLASSES.red]: RedButton,
}[buttonType]);

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps} disabled={isLoading ? true : false}>  {isLoading ? <Spinner /> : children}</CustomButton>
};

export default Button;

import React from "react";

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.styles";

export const BUTTON_TYPE_COLORS = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_COLORS.base) => ({
  [BUTTON_TYPE_COLORS.base]: BaseButton,
  [BUTTON_TYPE_COLORS.google]: GoogleSignInButton,
  [BUTTON_TYPE_COLORS.inverted]: InvertedButton,
}[buttonType]);

export default function Button({ children, buttonType, ...otherProps }) {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
}

import React from "react";
import './button.styles.css'

const Button_type_colors = {
  google: "google-sign-in",
  inverted: "inverted",
};

export default function Button({ children,buttonType,...otherProps }) {
  return <button className={`button-container ${Button_type_colors[buttonType]}`} {...otherProps} >{children}</button>;
}

import { React } from "react";
import "./form-input.styles.css";

export default function FormInput({ label, inputOptions }) {
  return (
    <div className="group">
      <input className="form-input" {...inputOptions}></input>
      <label
        className={`${
          inputOptions.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    </div>
  );
}

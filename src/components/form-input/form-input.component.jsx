import React from "react";
import { Group, FormInputLabel, Input } from "./form-input.styles";
export default function FormInput({ label, inputOptions }) {
  return (
    <Group>
      <Input {...inputOptions}></Input>
      <FormInputLabel shrink={inputOptions.value.length}>
        {label}
      </FormInputLabel>
    </Group>
  );
}

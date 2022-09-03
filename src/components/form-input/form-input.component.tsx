import { FormGroup, FormInputLabel, Input } from "./form-input.styles";
import {FC, InputHTMLAttributes} from "react"

type FormInputProps = {
  label: string,
} & InputHTMLAttributes<HTMLInputElement>

const FormInput:FC<FormInputProps> = ({ label, ...otherProps }) => {
  return (
    <FormGroup>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={true}>
          {label}
        </FormInputLabel>
      )}
    </FormGroup>
  );
};

export default FormInput;

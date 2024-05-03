import { RegisterOptions } from "react-hook-form";
import { SignUpInputs } from "./formInputs";

export type AuthFormField = {
  required: boolean;
  label: string;
  name: keyof SignUpInputs;
  placeholder: string;
  validationRules: RegisterOptions;
};

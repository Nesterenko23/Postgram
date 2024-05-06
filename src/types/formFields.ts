import { RegisterOptions } from "react-hook-form";
import { SignInInputs, SignUpInputs } from "./formInputs";

export type SignUpFormField = {
  required: boolean;
  label: string;
  name: keyof SignUpInputs;
  placeholder: string;
  validationRules: RegisterOptions;
};

export type SignInFormField = {
  required: boolean;
  label: string;
  name: keyof SignInInputs;
  placeholder: string;
  validationRules: RegisterOptions;
};

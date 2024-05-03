import { AuthFormField } from "../types/formFields";
import {
  emailRules,
  nameRules,
  passwordRules,
  usernameRules,
} from "../validations";

export const signUpFields: AuthFormField[] = [
  {
    required: true,
    label: "Name",
    name: "name",
    placeholder: "Name",
    validationRules: nameRules,
  },
  {
    required: true,
    label: "Username",
    name: "username",
    placeholder: "Username",
    validationRules: usernameRules,
  },
  {
    required: true,
    label: "Email",
    name: "email",
    placeholder: "Email",
    validationRules: emailRules,
  },
  {
    required: true,
    label: "Password",
    name: "password",
    placeholder: "Password",
    validationRules: passwordRules,
  },
];

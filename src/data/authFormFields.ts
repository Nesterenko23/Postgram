import { SignInFormField, SignUpFormField } from "../types/formFields";
import {
  emailRules,
  nameRules,
  passwordRules,
  usernameRules,
} from "../validations";

export const signUpFields: SignUpFormField[] = [
  {
    required: false,
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

export const signInFields: SignInFormField[] = [
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

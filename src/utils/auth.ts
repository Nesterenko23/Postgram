import { SubmitHandler } from "react-hook-form";
import { SignInInputs, SignUpInputs } from "../types/formInputs";

export const signUp: SubmitHandler<SignUpInputs> = (data) => console.log(data);

export const signIn: SubmitHandler<SignInInputs> = (data) => console.log(data);

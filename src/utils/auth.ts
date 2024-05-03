import { SubmitHandler } from "react-hook-form";
import { SignUpInputs } from "../types/formInputs";

export const signUp: SubmitHandler<SignUpInputs> = (data) => console.log(data);

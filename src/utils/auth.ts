import { SubmitHandler } from "react-hook-form";
import { SignInInputs, SignUpInputs } from "../types/formInputs";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";

export const signUp = async ({ email, password, username }: SignUpInputs) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(user, {
      displayName: username,
    });
    return user;
  } catch (error) {
    return error;
  }
};

export const signIn: SubmitHandler<SignInInputs> = async ({
  email,
  password,
}: SignInInputs) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    return error;
  }
};

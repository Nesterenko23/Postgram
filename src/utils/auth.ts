import { SubmitHandler } from "react-hook-form";
import { SignInInputs, SignUpInputs } from "../types/formInputs";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { User } from "../types/user";

export const signUp = async ({
  name,
  email,
  password,
  username,
}: SignUpInputs) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const UserModel: User = {
      uid: user.uid,
      name,
      email,
      username,
      userPhoto: "",
    };

    await setDoc(doc(db, "users", user.uid), UserModel);

    return user;
  } catch (error) {
    console.log(error);
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

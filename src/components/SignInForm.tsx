import {
  Button,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
  FormErrorMessage,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { SignInInputs } from "../types/formInputs";
import { signInFields } from "../data/authFormFields";
import { signIn } from "../utils/auth";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import React from "react";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInInputs>({
    mode: "onBlur",
  });

  const [error, setError] = React.useState<null | string>(null);

  const navigate = useNavigate();

  const handleSignIn: SubmitHandler<SignInInputs> = async (data) => {
    const result = await signIn(data);
    if (result instanceof FirebaseError) {
      switch (result.code) {
        case "auth/invalid-credential":
          return setError("Oops! Looks like you entered the wrong data.");
        default:
          return setError(
            "The server is temporarily unavailable. Please contact support or visit the page later."
          );
      }
    }
    navigate("/");
  };

  return (
    <VStack>
      <Heading as={"h1"} fontSize={30}>
        Log in to your account
      </Heading>
      <Text color={"rgb(120 120 163)"}>
        Welcome back! Please enter your details.
      </Text>
      <Text>{error}</Text>
      <form
        noValidate
        onSubmit={handleSubmit(handleSignIn)}
        style={{
          marginTop: "0.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          width: "420px",
        }}
      >
        {signInFields.map(({ label, name, placeholder, validationRules }) => (
          <FormControl isInvalid={errors[name] ? true : false}>
            <FormLabel>{label}</FormLabel>
            <Input
              {...register(name, validationRules)}
              height={50}
              placeholder={placeholder}
            />
            {errors[name] && (
              <FormErrorMessage>{errors[name]?.message}</FormErrorMessage>
            )}
          </FormControl>
        ))}
        <Button width="100%" height={50} type="submit">
          Sign In
        </Button>
        <Text>
          Don't have an account?{" "}
          <Link to={"/auth/signUp"} style={{ marginLeft: "1" }}>
            Sign up
          </Link>
        </Text>
      </form>
    </VStack>
  );
};

export default SignInForm;

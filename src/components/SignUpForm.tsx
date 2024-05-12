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
import { SignUpInputs } from "../types/formInputs";
import { signUpFields } from "../data/authFormFields";
import { signUp } from "../utils/auth";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import React from "react";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInputs>({
    mode: "onBlur",
  });

  const [error, setError] = React.useState<null | string>(null);

  const navigate = useNavigate();

  const handleSignUp: SubmitHandler<SignUpInputs> = async (data) => {
    const result = await signUp(data);
    if (result instanceof FirebaseError) {
      switch (result.code) {
        case "auth/email-already-in-use":
          return setError("Oops! Looks like this e-mail is already in use.");
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
        Sign up to your account
      </Heading>
      <Text color={"rgb(120 120 163)"}>
        To use postgram, Please enter your details
      </Text>
      <Text>{error}</Text>
      <form
        noValidate
        onSubmit={handleSubmit(handleSignUp)}
        style={{
          marginTop: "0.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          width: "420px",
        }}
      >
        {signUpFields.map(({ label, name, placeholder, validationRules }) => (
          <FormControl key={name} isInvalid={errors[name] ? true : false}>
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
          Sign Up
        </Button>
        <Text>
          Already have an account?{" "}
          <Link to={"/auth/signIn"} style={{ marginLeft: "1" }}>
            Log in
          </Link>
        </Text>
      </form>
    </VStack>
  );
};

export default SignUpForm;

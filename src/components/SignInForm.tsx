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
import { useForm } from "react-hook-form";
import { SignInInputs } from "../types/formInputs";
import { signInFields } from "../data/authFormFields";
import { signIn } from "../utils/auth";
import { Link } from "react-router-dom";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInInputs>({
    mode: "onBlur",
  });

  return (
    <VStack>
      <Heading as={"h1"} fontSize={30}>
        Log in to your account
      </Heading>
      <Text color={"rgb(120 120 163)"}>
        Welcome back! Please enter your details.
      </Text>
      <form
        noValidate
        onSubmit={handleSubmit(signIn)}
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

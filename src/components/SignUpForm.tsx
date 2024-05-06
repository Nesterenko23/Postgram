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
import { SignUpInputs } from "../types/formInputs";
import { signUpFields } from "../data/authFormFields";
import { signUp } from "../utils/auth";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInputs>({
    mode: "onBlur",
  });

  return (
    <VStack>
      <Heading as={"h1"} fontSize={30}>
        Sign up to your account
      </Heading>
      <Text color={"rgb(120 120 163)"}>
        To use postgram, Please enter your details
      </Text>
      <form
        noValidate
        onSubmit={handleSubmit(signUp)}
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

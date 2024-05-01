import {
  Button,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";

const SignUpForm = () => {
  return (
    <VStack>
      <Heading as={"h1"} fontSize={30}>
        Sign up to your account
      </Heading>
      <Text color={"rgb(120 120 163)"}>
        To use postgram, Please enter your details
      </Text>
      <form
        style={{
          marginTop: "0.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "420px",
        }}
      >
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input height={50} placeholder="Name" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Username</FormLabel>
          <Input height={50} placeholder="Username" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input height={50} placeholder="Email" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input height={50} placeholder="Password" />
        </FormControl>
        <Button colorScheme="facebook" height={50} type="submit">
          Sign Up
        </Button>
      </form>
    </VStack>
  );
};

export default SignUpForm;

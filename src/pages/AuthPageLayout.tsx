import { Center, Image, HStack, Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const AuthPageLayout = () => {
  return (
    <HStack height="100vh">
      <Center flex={1}>
        <Outlet />
      </Center>
      <Box height="100vh" flex="1">
        <Image
          height="100%"
          width="100%"
          objectFit={"cover"}
          src="https://i.pinimg.com/564x/1a/4e/ae/1a4eaeb32726730d1fe1d96b4068ee38.jpg"
        />
      </Box>
    </HStack>
  );
};

export default AuthPageLayout;

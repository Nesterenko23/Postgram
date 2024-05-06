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
          src="https://www.intotheminds.com/blog/app/uploads/social-media-marketing-smm-banner.jpg"
        />
      </Box>
    </HStack>
  );
};

export default AuthPageLayout;

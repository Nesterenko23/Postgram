import { Center, Image, HStack, Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

const AuthPageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <HStack height="100vh">
      <Center flex={1}>{children}</Center>
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

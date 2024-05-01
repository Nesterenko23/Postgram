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
          src="https://media.licdn.com/dms/image/D5612AQG41BInUYpgSA/article-cover_image-shrink_720_1280/0/1691562810505?e=2147483647&v=beta&t=T58r4Wz52BJWQy8y4aswNOoUCOWjt--QqzfiZiLeS5k"
        />
      </Box>
    </HStack>
  );
};

export default AuthPageLayout;

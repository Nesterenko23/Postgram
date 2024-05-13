import { Box, Center, Heading, VStack } from "@chakra-ui/react";
import PostCard from "./PostCard";

const HomeFeed = () => {
  return (
    <Box
      height="100vh"
      flex="1"
      p={["2.5rem 3rem", "1.5rem", "2.5rem 3rem"]}
      overflow="auto"
    >
      <Center>
        <VStack w={["640px", "100%", "100%", "640px"]} gap="2.25rem">
          <Heading alignSelf="flex-start" fontSize="1.875rem">
            Home Feed
          </Heading>

          <VStack as="ul" w="100%" gap="2.25rem">
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </VStack>
        </VStack>
      </Center>
    </Box>
  );
};

export default HomeFeed;

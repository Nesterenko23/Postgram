import { Box, VStack, Avatar, Text, Button, Card } from "@chakra-ui/react";
const PromotionCard = () => {
  return (
    <Card>
      <VStack p="2rem 1.25rem" gap="1rem">
        <Avatar
          height="48px"
          width="48px"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmV_0ReTf92KhITvV13M9-6J8QzajTJSBfEw6i6UkSDw&s"
        />
        <Box>
          <Text noOfLines={1} fontSize={16}>
            <b>Jason Statham</b>
          </Text>
          <Text fontSize={14} marginTop="4px" color="primary.400">
            @jasonstatham
          </Text>
        </Box>
        <Button>Follow</Button>
      </VStack>
    </Card>
  );
};

export default PromotionCard;

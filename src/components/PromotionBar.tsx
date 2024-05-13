import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import PromotionCard from "./PromotionCard";

const PromotionBar = () => {
  return (
    <Box
      h="100vh"
      p="2.5rem 1.5rem"
      overflow="auto"
      display={["inline-block", "none", "none", "none", "inline-block"]}
    >
      <Box
        w={[
          "25.9rem",
          "12.95rem",
          "12.95rem",
          "12.95rem",
          "12.95rem",
          "25.9rem",
        ]}
      >
        <Heading fontSize="1.5rem">Top Creators</Heading>
        <Grid
          templateColumns={[
            "repeat(2, 1fr)",
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
          ]}
          gap="1.5rem"
          mt="2.5rem"
        >
          <GridItem>
            <PromotionCard />
          </GridItem>
          <GridItem>
            <PromotionCard />
          </GridItem>
          <GridItem>
            <PromotionCard />
          </GridItem>
          <GridItem>
            <PromotionCard />
          </GridItem>
          <GridItem>
            <PromotionCard />
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default PromotionBar;

import {
  Avatar,
  Box,
  Image,
  Card,
  Text,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Flex,
  VStack,
} from "@chakra-ui/react";
import {
  HiOutlineHeart,
  HiOutlineChatAlt2,
  HiOutlineBookmark,
} from "react-icons/hi";

const PostCard = () => {  

  return (
    <Card w="100%">
      <CardHeader>
        <HStack gap="12px">
          <Avatar
            height="48px"
            width="48px"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmV_0ReTf92KhITvV13M9-6J8QzajTJSBfEw6i6UkSDw&s"
          />
          <Box>
            <Text noOfLines={1} fontSize={18}>
              <b>Jason Statham</b>
            </Text>
            <Text fontSize={14} marginTop="-1" color="primary.400">
              2 days ago / UK
            </Text>
          </Box>
        </HStack>

        <Box mt="20px">
          <Text noOfLines={[3, 2, 3]} fontSize={16}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, facilis praesentium. Omnis quam deserunt non deleniti
            eaque repellat animi illo possimus commodi veritatis, nesciunt
            provident consectetur, facere voluptatibus quas magnam!
          </Text>
          <Text fontSize={14} color="primary.400" my="8px">
            #Sport #Love #car #Beauty
          </Text>
        </Box>
      </CardHeader>

      <CardBody my="-20px">
        <Box
          borderRadius="15px"
          overflow="hidden"
          height={["450", "250px", "450px"]}
          w="100%"
        >
          <Image
            w="100%"
            h="100%"
            objectFit="cover"
            src="https://media.gqitalia.it/photos/5e4658101ff186000887f268/16:9/w_1519,h_854,c_limit/Aston%20Martin%20Vantage%20Roadster%2002.jpg"
          />
        </Box>
      </CardBody>

      <CardFooter>
        <HStack justifyContent="space-between" w="100%">
          <HStack gap="20px">
            <HStack gap="1" alignItems="center">
              <HiOutlineHeart fontSize="24" />
              <Text>157</Text>
            </HStack>
            <HiOutlineChatAlt2 fontSize="24"/>
          </HStack>
          <HiOutlineBookmark fontSize="24"/>
        </HStack>
      </CardFooter>
    </Card>
  );
};

export default PostCard;

import {
  HStack,
  Heading,
  VStack,
  Text,
  Box,
  Avatar,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { sideBarButtons } from "../data/sideBarButtons";
import { useAppSelector } from "../hooks/reduxHooks";
import { currentUserSelector } from "../redux/slices/currentUserSlice";
import { Link } from "react-router-dom";
import React from "react";

const SideBar = () => {
  const [selected, setSelected] = React.useState<number>(0);

  const currentUser = useAppSelector(currentUserSelector);

  return (
    <VStack gap="2.75rem" w="270px" p="2.5rem 1.5rem" height="100%">
      <Heading fontSize={25} alignSelf="flex-start">
        Postgram
      </Heading>

      {currentUser ? (
        <HStack gap="12px">
          <Avatar height="56px" width="56px" src={currentUser.userPhoto} />
          <Box>
            <Text noOfLines={1} fontSize={18}>
              <b>{currentUser.name}</b>
            </Text>
            <Text fontSize={14} marginTop="-1" color="primary.400">
              @{currentUser.username}
            </Text>
          </Box>
        </HStack>
      ) : (
        <ButtonGroup>
          <Link to={"auth/signIn"}>
            <Button>Log in</Button>
          </Link>
          <Link to={"auth/signUp"}>
            <Button variant="outline">Sign up</Button>
          </Link>
        </ButtonGroup>
      )}

      <VStack w="100%" gap="1.5rem">
        {sideBarButtons.map((button, index) => (
          <Button
            onClick={() => setSelected(index)}
            justifyContent="flex-start"
            leftIcon={button.icon}
            bg={selected == index ? "primary.500" : "transparent"}
            color={selected == index ? "white" : "#1A202C"}
            _hover={{ bg: "primary.500", color: "white" }}
            w="100%"
            h="56px"
          >
            <Text>{button.title}</Text>
          </Button>
        ))}
      </VStack>
    </VStack>
  );
};

export default SideBar;

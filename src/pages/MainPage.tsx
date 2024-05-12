import { Heading, Text } from "@chakra-ui/react";
import { useAppSelector } from "../hooks/reduxHooks";
import { currentUserSelector } from "../redux/slices/currentUserSlice";

const MainPage = () => {

  const currentUser = useAppSelector(currentUserSelector)

  return (
    <div>
      <Heading>Hello {currentUser?.username}</Heading>
      <Text>{currentUser?.email}</Text>
    </div>
  );
};

export default MainPage;

import { HStack, Heading, Text } from "@chakra-ui/react";
import { useAppSelector } from "../hooks/reduxHooks";
import { currentUserSelector } from "../redux/slices/currentUserSlice";
import SideBar from "../components/SideBar";

const MainPage = () => {

  const currentUser = useAppSelector(currentUserSelector)

  return (
    <HStack>
      <SideBar/>
    </HStack>
  );
};

export default MainPage;

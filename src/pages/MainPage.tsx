import { HStack } from "@chakra-ui/react";
import SideBar from "../components/SideBar";
import DrawerWrapper from "../components/Drawer";
import useWindowDimensions from "../hooks/useWindowDimensions";

const MainPage = () => {
  const { width } = useWindowDimensions();

  return (
    <HStack>
      {width < 960 ? <DrawerWrapper /> : <SideBar />}
    </HStack>
  );
};

export default MainPage;

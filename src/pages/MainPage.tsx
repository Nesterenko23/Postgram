import { Flex } from "@chakra-ui/react";
import SideBar from "../components/SideBar";
import DrawerWrapper from "../components/DrawerWrapper";
import useWindowDimensions from "../hooks/useWindowDimensions";
import HomeFeed from "../components/HomeFeed";
import PromotionBar from "../components/PromotionBar";

const MainPage = () => {
  const { width } = useWindowDimensions();

  return (
    <Flex height="100vh">
      {width < 960 ? <DrawerWrapper /> : <SideBar />}
      <HomeFeed />
      <PromotionBar />
    </Flex>
  );
};

export default MainPage;

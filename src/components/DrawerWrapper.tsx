import {
  Button,
  useDisclosure,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Drawer,
} from "@chakra-ui/react";
import { HiMenuAlt1 } from "react-icons/hi";
import SideBar from "./SideBar";

const DrawerWrapper = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        position="absolute"
        top={2}
        right={2}
        zIndex="100"
      >
        <HiMenuAlt1 fontSize={24} />
      </Button>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody p="0">
            <SideBar />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerWrapper;

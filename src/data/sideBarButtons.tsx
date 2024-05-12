import { SideBarButtons } from "../types/sideBarButtons";
import {
  HiOutlineBookmark,
  HiOutlineHome,
  HiOutlineLogout,
  HiOutlineSearch,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { HiOutlinePhoto } from "react-icons/hi2";
export const sideBarButtons: SideBarButtons[] = [
  {
    icon: <HiOutlineHome fontSize={24} />,
    title: "Home",
  },
  {
    icon: <HiOutlineSearch fontSize={24} />,
    title: "Explore",
  },
  {
    icon: <HiOutlineUserGroup fontSize={24} />,
    title: "People",
  },
  {
    icon: <HiOutlineBookmark fontSize={24} />,
    title: "Saved",
  },
  {
    icon: <HiOutlinePhoto fontSize={24} />,
    title: "Create Post",
  },
  {
    icon: <HiOutlineLogout fontSize={24} />,
    title: "Logout",
  },
];

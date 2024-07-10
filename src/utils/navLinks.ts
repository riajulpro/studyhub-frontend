import { CiUser } from "react-icons/ci";
import { FaUserCog } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";

export const navLinks = [
  {
    path: "/",
    route: "Home",
  },
  {
    path: "/products",
    route: "Products",
  },
  {
    path: "/about-us",
    route: "About Us",
  },
  {
    path: "/contact-us",
    route: "Conatct us",
  },
];

export const profileNavlinks = [
  {
    path: "/",
    lebel: "Profile",
    Icon: CiUser,
  },

  {
    path: "/",
    lebel: "settings",
    Icon: FaUserCog,
  },
  {
    path: "/",
    lebel: "Dashboard",
    Icon: MdOutlineDashboard,
  },
];

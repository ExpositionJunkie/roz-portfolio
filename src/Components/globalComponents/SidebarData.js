import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Projects",
    path: "/projects",
    icon: <CgIcons.CgWebsite />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/about",
    icon: <AiIcons.AiOutlineInfoCircle />,
    cName: "nav-text",
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
];

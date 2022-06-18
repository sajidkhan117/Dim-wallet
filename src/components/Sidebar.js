import React, { useState } from "react";
import './Sidebar.css'
// import {
//     FaTh,
//     FaBars,
//     FaUserAlt,
//     FaRegChartBar,
//     FaCommentAlt,
//     FaShoppingBag,

//     FaThList
// }from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { RiContactsBook2Fill } from "react-icons/ri";
import { IoMdKey } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoPlaySkipForwardOutline } from "react-icons/io5";
import { GoGift } from "react-icons/go";
import { RiMessage2Line } from "react-icons/ri";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { RiSettings2Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <MdDashboard />,
    },
    {
      path: "/memberships",
      name: "Memberships",
      icon: <RiContactsBook2Fill />,
    },
    {
      path: "/kyc",
      name: "KYC",
      icon: <IoMdKey />,
    },
    {
      path: "/notifications",
      name: "Notifications",
      icon: <IoNotificationsOutline />,
    },
    {
      path: "/slideshow",
      name: "Slideshow",
      icon: <IoPlaySkipForwardOutline />,
    },
    {
      path: "/referalls",
      name: "Referalls",
      icon: <GoGift />,
    },
    {
      path: "/complaints",
      name: "Complaints",
      icon: <RiMessage2Line />,
    },
    {
      path: "/announcements",
      name: "Annoucements",
      icon: <HiOutlineSpeakerphone />,
    },
    {
      path: "/settings",
      name: "Settings",
      icon: <RiSettings2Line />,
    },
  ];
  return (
    <div className="container">
      <div className={isOpen ? "sidebar" : "sidebar sidebar2"}>
        <div className="top_section">
          <h3
            className={
              isOpen ? "section-display" : "section-display section-display2"
            }
          >
            Dim Wallet
          </h3>
          <div className={isOpen ? "menu-bars" : "menu-bars menu-bars2"}>
            <FaBars onClick={toggle} className="menubar-icon" />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div className={isOpen ? "link_text" : "link_text link_text2"}>
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;

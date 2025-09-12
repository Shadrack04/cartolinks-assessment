import { Bell, Moon } from "lucide-react";
import React from "react";
import { BiSupport } from "react-icons/bi";
import { FaRegImage, FaUserAlt } from "react-icons/fa";

export default function NavigationUtil() {
  return (
    <div className=" flex items-center gap-2">
      <div className=" flex items-center gap-1">
        <FaRegImage />
        <p>Gallery</p>
      </div>
      <div className=" flex items-center gap-1">
        <BiSupport />
        <p>Support</p>
      </div>
      <Moon />
      <Bell />
      <FaUserAlt />
    </div>
  );
}

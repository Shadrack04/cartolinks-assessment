import { Bell, Moon } from "lucide-react";
import React from "react";
import { BiSupport } from "react-icons/bi";
import { FaBell, FaMoon, FaRegImage, FaUserAlt } from "react-icons/fa";

export default function NavigationUtil() {
  return (
    <div className=" flex items-center gap-2">
      <div className=" flex items-center gap-1 bg-muted py-1 px-3 rounded-lg">
        <FaRegImage />
        <p>Gallery</p>
      </div>
      <div className=" flex items-center gap-1 bg-muted py-1 px-3 rounded-lg">
        <BiSupport />
        <p>Support</p>
      </div>
      <FaMoon className="bg-muted p-2 rounded-full size-8" />
      <FaBell className="bg-muted p-2 rounded-full size-8" />

      <FaUserAlt className="bg-muted p-2 rounded-full size-8" />
    </div>
  );
}

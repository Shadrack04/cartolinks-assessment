import React from "react";
import Logo from "./logo";
import NavigationTabs from "./navigation-tabs";
import NavigationUtil from "./navigation-util";
import { RiSideBarLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import Profile from "./profile";

export default function AppNav() {
  return (
    <header className=" hidden md:flex px-8 justify-between py-2 ">
      <div className=" flex-1 flex items-center gap-8">
        <Logo className=" hidden md:block" />
        <div className=" hidden md:flex items-center text-[#a5a5a5] justify-center gap-1 rounded-lg">
          <Profile />
          <p className="">benevolent</p>
          <IoIosArrowDown />
        </div>
        <RiSideBarLine className=" md:hidden text-foreground" />
      </div>
      <div className=" flex-2 flex items-center justify-between">
        <NavigationTabs />
        <NavigationUtil />
      </div>
    </header>
  );
}

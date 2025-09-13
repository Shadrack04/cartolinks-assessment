import React from "react";
import Logo from "./logo";
import NavigationTabs from "./navigation-tabs";
import NavigationUtil from "./navigation-util";
import { RiSideBarLine } from "react-icons/ri";

export default function AppNav() {
  return (
    <header className=" hidden md:flex px-8 justify-between py-2 ">
      <div className=" flex-1">
        <Logo className=" hidden md:block" />
        <RiSideBarLine className=" md:hidden text-foreground" />
      </div>
      <div className=" flex-2 flex items-center justify-between">
        <NavigationTabs />
        <NavigationUtil />
      </div>
    </header>
  );
}

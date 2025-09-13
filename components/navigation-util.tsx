"use client";

import React, { useEffect, useState } from "react";
import { BiSupport } from "react-icons/bi";
import { FaBell, FaMoon, FaRegImage, FaSun, FaUserAlt } from "react-icons/fa";

export default function NavigationUtil() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme
      ? savedTheme === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;

    setIsDarkTheme(isDark);

    document.documentElement.classList.toggle("dark", isDark);
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;
    document.documentElement.classList.toggle("dark", isDarkTheme);
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
  }, [hasMounted, isDarkTheme]);

  const handleThemeToggle = () => {
    setIsDarkTheme((theme) => !theme);
  };

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
      <div onClick={handleThemeToggle} className=" cursor-pointer">
        {isDarkTheme ? (
          <FaSun className="bg-muted p-2 rounded-full size-8" />
        ) : (
          <FaMoon className="bg-muted p-2 rounded-full size-8" />
        )}
      </div>

      <FaBell className="bg-muted p-2 rounded-full size-8" />

      <FaUserAlt className="bg-muted p-2 rounded-full size-8" />
    </div>
  );
}

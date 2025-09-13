import { ToolsDataType } from "@/types";
import { FaImage } from "react-icons/fa";
import { FaCodeBranch, FaVideo } from "react-icons/fa";
import { FaWandSparkles } from "react-icons/fa6";
import { LuGitCommitVertical } from "react-icons/lu";
import { LuMicVocal } from "react-icons/lu";
import { IoBodySharp } from "react-icons/io5";

export const toolsData: ToolsDataType[] = [
  {
    name: "Image",
    description: "Generate images with custom styles in flux and ideogram",
    isNew: true,
    Icon: FaImage,
    bg: " bg-gradient-to-b from-[#28133b] to-[#a0b2bf] ",
  },

  {
    name: "Video",
    description: "Generate images with custom styles in flux and ideogram",
    isNew: false,
    Icon: FaVideo,
    bg: " bg-[#ffa600]",
  },
  {
    name: "Realtime",
    description: "Generate images with custom styles in flux and ideogram",
    isNew: false,
    Icon: LuGitCommitVertical,
    bg: " bg-gradient-to-b from-[#05a4f4] to-[#45dcff]",
  },

  {
    name: "Enhancer",
    description: "Generate images with custom styles in flux and ideogram",
    isNew: true,
    Icon: FaWandSparkles,
    bg: " bg-gradient-to-b from-[#131313] to-[#6a6a6a]",
  },

  {
    name: "Edit",
    description: "Generate images with custom styles in flux and ideogram",
    isNew: true,
    Icon: FaCodeBranch,
    bg: " bg-gradient-to-b from-[#2d1345] to-[#815ca5]",
  },

  {
    name: "Video Lipsync",
    description: "Generate images with custom styles in flux and ideogram",
    isNew: true,
    Icon: LuMicVocal,
    bg: " bg-gradient-to-b from-[#194a3c] to-[#88b091]",
  },

  {
    name: "Motion Transfer",
    description: "Generate images with custom styles in flux and ideogram",
    isNew: true,
    Icon: IoBodySharp,
    bg: " bg-[#1b1c1e]",
  },

  {
    name: "Train",
    description: "Generate images with custom styles in flux and ideogram",
    isNew: false,
    Icon: FaImage,
    bg: " bg-[#ffa600]",
  },
];

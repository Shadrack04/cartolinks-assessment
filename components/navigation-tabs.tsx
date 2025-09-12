import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { MdHomeFilled } from "react-icons/md";
import Link from "next/link";
import { FaCodeBranch, FaFolder, FaRegImage, FaVideo } from "react-icons/fa";
import { FaWandSparkles } from "react-icons/fa6";
import { LuGitCommitVertical } from "react-icons/lu";

export default function NavigationTabs() {
  return (
    <Tabs defaultValue="home" className="items-center">
      <TabsList className=" gap-1 h-13 rounded-xl p-1.5">
        <TabsTrigger
          value="home"
          asChild
          className=" p-4 data-[state=active] data-[state=active]:p-4"
        >
          <Link href="/">
            <MdHomeFilled className=" size-4 " />
          </Link>
        </TabsTrigger>

        <TabsTrigger
          value="image"
          asChild
          className=" p-4 data-[state=active] data-[state=active]:p-4"
        >
          <Link href="/">
            <FaRegImage className=" size-4 " />
          </Link>
        </TabsTrigger>

        <TabsTrigger
          value="video"
          asChild
          className=" p-4 data-[state=active] data-[state=active]:p-4"
        >
          <Link href="/">
            <FaVideo className=" size-4 " />
          </Link>
        </TabsTrigger>

        <TabsTrigger
          value="enhancer"
          asChild
          className=" p-4 data-[state=active] data-[state=active]:p-4"
        >
          <Link href="/">
            <FaWandSparkles className=" rotate-y-180 size-4" />
          </Link>
        </TabsTrigger>

        <TabsTrigger
          value="realtime"
          asChild
          className=" p-4 data-[state=active] data-[state=active]:p-4"
        >
          <Link href="/">
            <LuGitCommitVertical className=" size-4" />
          </Link>
        </TabsTrigger>

        <TabsTrigger
          value="edit"
          asChild
          className=" p-4 data-[state=active] data-[state=active]:p-4"
        >
          <Link href="/">
            <FaCodeBranch className=" size-4 rotate-x-180" />
          </Link>
        </TabsTrigger>
        <TabsTrigger
          value="assets"
          asChild
          className=" p-4 data-[state=active] data-[state=active]:p-4"
        >
          <Link href="/">
            <FaFolder className=" size-4" />
          </Link>
        </TabsTrigger>
      </TabsList>
      {/* <TabsContent value="tab-1"></TabsContent>
      <TabsContent value="tab-2"></TabsContent>
      <TabsContent value="tab-3"></TabsContent> */}
    </Tabs>
  );
}

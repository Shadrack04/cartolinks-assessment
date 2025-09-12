import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FolderClosed, House } from "lucide-react";
import { MdHomeFilled } from "react-icons/md";
import Link from "next/link";
import { FaFolder, FaRegImage, FaVideo } from "react-icons/fa";
import { FaWandSparkles } from "react-icons/fa6";
import Image from "next/image";

export default function NavigationTabs() {
  return (
    <Tabs defaultValue="tab-1" className="items-center">
      <TabsList>
        <TabsTrigger value="tab-1" asChild>
          <Link href="/">
            <MdHomeFilled />
          </Link>
        </TabsTrigger>
        <TabsTrigger value="tab-2" asChild>
          <Link href="/">
            <FaRegImage />
          </Link>
        </TabsTrigger>
        <TabsTrigger value="tab-2" asChild>
          <Link href="/">
            <FaVideo />
          </Link>
        </TabsTrigger>
        <TabsTrigger value="tab-2" asChild>
          <Link href="/">
            <FaWandSparkles className=" rotate-y-180" />
          </Link>
        </TabsTrigger>
        {/* <TabsTrigger value="tab-2" asChild>
          <Link href="/">
            <Image src="/icons/edit.svg" width={24} height={24} alt="" />
          </Link>
        </TabsTrigger> */}
        <TabsTrigger value="tab-3" asChild>
          <Link href="/">
            <FaFolder />
          </Link>
        </TabsTrigger>
      </TabsList>
      {/* <TabsContent value="tab-1"></TabsContent>
      <TabsContent value="tab-2"></TabsContent>
      <TabsContent value="tab-3"></TabsContent> */}
    </Tabs>
  );
}

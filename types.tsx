import React from "react";

export type ToolsDataType = {
  name: string;
  description: string;
  isNew: boolean;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  bg: string;
};

import React from "react";
import Tools from "./tools";

import { ImageCarousel } from "./image-carousel";

export default function HomeScreen() {
  return (
    <div>
      <ImageCarousel />
      <Tools />
    </div>
  );
}

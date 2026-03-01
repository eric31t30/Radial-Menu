"use client";

import RadialImage from "./RadialImage";
import type { RadialItem } from "@/types/radial";

const images: RadialItem[] = [
  { id: "1", src: "https://picsum.photos/id/1018/500/500" },
  { id: "2", src: "https://picsum.photos/id/1015/500/500" },
  { id: "3", src: "https://picsum.photos/id/1019/500/500" },
  { id: "4", src: "https://picsum.photos/id/1020/500/500" },
  { id: "5", src: "https://picsum.photos/id/1024/500/500" },
];

function RadialMenu() {
  const radius = 120;
  const diameter = radius * 2;

  const angleStep = 360 / images.length;

  return (
    <nav
      aria-label="Radial menu"
      className="relative flex items-center justify-center"
    >
      <div className="relative flex items-center justify-center z-50">
        {images.map((item, index) => {
          const angle = angleStep * index;

          return (
            <RadialImage
              key={item.id}
              item={item}
              angle={angle}
              radius={radius}
            />
          );
        })}
      </div>

      <span
        aria-hidden="true"
        className="
          absolute z-0 rounded-full
          border border-neutral-100/40
          border-b-neutral-100 border-t-neutral-100
          pointer-events-none
        "
        style={{ width: diameter, height: diameter }}
      />

      <span
        aria-hidden="true"
        className="
          absolute z-0 rounded-full
          border border-neutral-100/20
          pointer-events-none
        "
        style={{ width: radius * 1.2, height: radius * 1.2 }}
      />
    </nav>
  );
}

export default RadialMenu;

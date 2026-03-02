import { useState } from "react";
import Image from "next/image";
import type { ImageItem } from "@/types/ImageItem";
import MenuImageLoader from "./loaders/MenuImageLoader";

type Props = {
  item: ImageItem;
  angle: number;
  radius: number;
  isSelected: boolean;
  onSelect: () => void;
};

function RadialImage({ item, angle, radius, isSelected, onSelect }: Props) {

  const [loaded, setLoaded] = useState(false)

  return (
    <div
      key={item.id}
      className="
        absolute cursor-pointer
      "
      style={{
        transform: `
          rotate(${angle}deg)
          translate(${radius}px)
          rotate(-${angle}deg)
        `,
      }}
      onClick={onSelect}
    >
      <div
        className={`
          group flex justify-center items-center
          relative size-18 overflow-hidden rounded-full shadow-md
          transition duration-500
          hover:scale-105
          active:scale-105
          border-3
          ${isSelected 
            ? 
            "border-b-cyan-500/0 border-t-cyan-500/0 border-l-white border-r-white"
            : 
            "border-b-cyan-500/0 border-t-cyan-500/0 border-l-cyan-500/0 border-r-cyan-500/0"
          }
        `}
      >
        <Image
          src={item.url}
          alt={`Image ${item.id}`}
          fill
          sizes="80px"
          quality={90}
          className="
            object-cover
            transition duration-500
            group-hover:scale-110
            active:scale-105
          "
          onLoad={() => setLoaded(true)}
        />

        <MenuImageLoader loaded={loaded}/>

      </div>
    </div>
  );
}

export default RadialImage;

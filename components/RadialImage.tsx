import Image from "next/image";
import type { ImageItem } from "@/types/ImageItem";

type Props = {
  item: ImageItem;
  angle: number;
  radius: number;
};

function RadialImage({ item, angle, radius }: Props) {
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
    >
      <div
        className="
          group
          relative size-18 overflow-hidden rounded-full shadow-md
          transition duration-500
          hover:scale-105
          active:scale-105
        "
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
        />
      </div>
    </div>
  );
}

export default RadialImage;

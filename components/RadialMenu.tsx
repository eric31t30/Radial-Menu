"use client";

import RadialImage from "./RadialImage";
import type { ImageItem } from "@/types/ImageItem";

import Image from "next/image";
import ImageInput from "./ImageInput";
import { useState } from "react";

type Props ={
  images: ImageItem[]
}

function RadialMenu({ images }: Props) {

  const [activeInput, setActiveInput] = useState(false);

  const radius = 120;
  const diameter = radius * 2;

  const angleStep = 360 / images.length;

  return (
    <section
      aria-label="Radial menu"
      className="relative flex items-center justify-center h-screen w-screen"
    >
      <button 
        className="
          absolute
          size-8
          bg-white text-2xl text-black
          rounded-full z-50
          flex items-center justify-center
          cursor-pointer
          transition duration-500 hover:scale-105
        "
        onClick={()=> setActiveInput((i)=> !i)}
      >
        <Image
          src={"/icons/add.svg"}
          alt="Add"
          width={26}
          height={26}
          quality={90}
          className={`
            size-7 
            transition duration-700 ${activeInput ? "rotate-135" : ""}
          `}
        />
      </button>

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

      <ImageInput open={activeInput} onClose={() => setActiveInput(false)} />

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
    </section>
  );
}

export default RadialMenu;

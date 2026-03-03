'use client'

import { Suspense, useState } from "react";
import RadialMenu from "@/components/RadialMenu";
import MainLoader from "@/components/loaders/MainLoader";
import MenuToggle from "@/components/MenuToggle";
import type { ImageItem } from "@/types/ImageItem";

type Props = {
  images: ImageItem[]
}

export default function MenuSection({ images }: Props) {
  const [menuVisible, setMenuVisible] = useState(true)

  return (
    <>
      <Suspense fallback={<MainLoader />}>
        <div className={`
          flex items-center justify-center w-full h-full z-10
          transition duration-500
          ${menuVisible ? "opacity-100" : "pointer-events-none opacity-0"}
        `}>
          <RadialMenu images={images} />
        </div>
      </Suspense>
      <MenuToggle onToggle={() => setMenuVisible(!menuVisible)}/>
    </>
  )
}
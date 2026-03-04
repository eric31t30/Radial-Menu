'use client'

import { Suspense, useState, useEffect } from "react";
import RadialMenu from "@/components/RadialMenu";
import MainLoader from "@/components/loaders/MainLoader";
import MenuToggle from "@/components/MenuToggle";
import type { ImageItem } from "@/types/ImageItem";

type Props = {
  images: ImageItem[]
}

export default function MenuSection({ images }: Props) {
  const [menuVisible, setMenuVisible] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true)
    }, 0);
  }, [])

  return (
    <>

    
      <div className={`
        absolute inset-0 bg-neutral-950 z-20 pointer-events-none
        transition-opacity duration-2000
        ${isLoaded ? "opacity-0" : "opacity-100"}
      `}>
        <MainLoader />
      </div>

      {images.length > 0 &&
        <div className={`
        flex items-center justify-center w-full h-full z-10
        transition-all duration-500
        ${menuVisible ? "opacity-100 pointer-events-auto" : "pointer-events-none opacity-0"}
      `}>
          <RadialMenu images={images} />
        </div>
      }

      <MenuToggle onToggle={() => setMenuVisible(!menuVisible)}/>
    </>
  )
}
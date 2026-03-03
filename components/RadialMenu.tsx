"use client";

import RadialImage from "./RadialImage";
import type { ImageItem } from "@/types/ImageItem";
import ImageInput from "./ImageInput";
import MenuButton from "./MenuButton";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";
import { useSelectedImage } from "@/context/SelectedImageContext";
import { useBreakPoints } from "@/hooks/UseBreakPoints";

type Props = {
  images: ImageItem[];
};

type InputMode = "add" | "edit" | null;

function RadialMenu({ images }: Props) {

  const [inputMode, setInputMode] = useState<InputMode>(null);
  const { selectedImage, setSelectedImage } = useSelectedImage();

  const [lastMode, setLastMode] = useState<"add" | "edit">("add");

  const router = useRouter();
  const breakPoints = useBreakPoints()

  const radius = 
  breakPoints >= 1024 ? 220 :
  breakPoints >= 640 ? 180 :
  130;
  

  const diameter = radius * 2;
  const angleStep = 360 / images.length;
  const imagesLimit = 8;

  useEffect(() => {
    if (images?.length > 0) {
      setSelectedImage(images[0]);
    }
  }, [images, setSelectedImage]);

  const toggleMode = (mode: InputMode) => {
    if (mode !== null) setLastMode(mode);
    setInputMode((prev) => (prev === mode ? null : mode));
  };

  async function handleDelete() {
    if (!selectedImage) return;

    await fetch("/api/images", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: selectedImage.id })
    });

    const remaining = images.filter(img => img.id !== selectedImage.id);
    setSelectedImage(remaining[0] ?? null);
    router.refresh();
  }

  const handleSelect = useCallback((item: ImageItem) => {
    setSelectedImage(item)
  }, [setSelectedImage])
  

  return (
    <section
      aria-label="Radial menu"
      className="relative flex items-center justify-center h-screen w-screen z-10"
    >
      <div className="
        absolute grid gap-3
        grid-cols-2 grid-rows-2 
        sm:gap-4 sm:gap-x-5
        lg:gap-6
        xl:gap-4 xl:gap-x-5
        2xl:gap-3 2xl:gap-x-4
      ">

        <div className="w-full flex justify-center items-center col-span-2">
          <MenuButton
            icon="/icons/add.svg"
            alt="Add button"
            color="bg-white"
            borderColor="border-white"
            buttonClass={`${images.length === imagesLimit ? "opacity-50" : ""}`}
            iconClass={inputMode === "add" ? "rotate-135" : ""}
            size="sm:size-12 lg:size-14 xl:size-13 2xl:size-12"
            active={inputMode === "add"}
            onClick={() => {
              if(images.length === imagesLimit){
                toast.info(`Limite de imagens alcanzado (${images.length}/${imagesLimit})`)
              }else{
                toggleMode("add")
              }
            }}
          />
        </div>

        <div className="w-full flex justify-center items-center row-start-2">
          <MenuButton
            icon="/icons/edit.svg"
            alt="Edit button"
            color="bg-orange-600"
            borderColor="border-orange-600"
            buttonClass={`${!selectedImage ? "pointer-events-none opacity-50" : ""}`}
            iconClass="invert"
            size="size-7 sm:size-10"
            active={inputMode === "edit"}
            onClick={() => toggleMode("edit")}
          />
        </div>

        <div className="w-full flex justify-center items-center row-start-2">
          <MenuButton
            icon="/icons/delete.svg"
            alt="Delete button"
            color="bg-red-500"
            borderColor="border-red-500"
            buttonClass={`${!selectedImage ? "pointer-events-none opacity-50" : ""}`}
            iconClass="invert"
            size="size-7 sm:size-10"
            onClick={handleDelete}
          />
        </div>
      </div>

      <div className="relative flex items-center justify-center z-50">
        {images.map((item, index) => {
          const angle = angleStep * index;
          return (
            <RadialImage
              key={item.id}
              item={item}
              angle={angle}
              radius={radius}
              isSelected={item.id === selectedImage?.id}
              onSelect={handleSelect}
            />   
          );
        })}
      </div>

      <ImageInput
        open={inputMode !== null}
        mode={inputMode ?? lastMode}
        editingImage={inputMode === "edit" ? selectedImage : null}
        onClose={() => setInputMode(null)}
      />

      <span
        aria-hidden="true"
        className="
          absolute z-0 rounded-full border
          border-neutral-100/40 border-b-neutral-100 border-t-neutral-100 
          pointer-events-none
        "
        style={{ width: diameter, height: diameter }}
      />

      <span
        aria-hidden="true"
        className="
          absolute z-0 rounded-full border
          border-neutral-100/40 border-b-neutral-100 border-t-neutral-100 
          pointer-events-none
        "
        style={{ width: radius * 1.1, height: radius * 1.1 }}
      />
      <Toaster position="bottom-left" expand={true} richColors />
    </section>
  );
}

export default RadialMenu;
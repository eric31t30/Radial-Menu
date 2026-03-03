"use client";
import { createContext, useContext, useState } from "react";
import type { ImageItem } from "@/types/ImageItem";

type ContextType = {
  selectedImage: ImageItem | null;
  setSelectedImage: (img: ImageItem) => void;
};

const SelectedImageContext = createContext<ContextType>({
  selectedImage: null,
  setSelectedImage: () => {},
});

export function SelectedImageProvider({ children }: { children: React.ReactNode }) {
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);
  return (
    <SelectedImageContext.Provider value={{ selectedImage, setSelectedImage }}>
      {children}
    </SelectedImageContext.Provider>
  );
}

export const useSelectedImage = () => useContext(SelectedImageContext);
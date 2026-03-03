import { SelectedImageProvider } from "@/context/SelectedImageContext";
import BackgroundImage from "@/components/BackgroundImage";
import MenuSection from "@/components/MenuSection";

async function fetchImages() {
  try {
    const res = await fetch("http://localhost:3000/api/images", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch images");
    }

    return res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}

export default async function HomePage() {

  const images = await fetchImages();

  return (
    <SelectedImageProvider >
      <main className="
        relative min-h-screen flex items-center justify-center 
        overflow-hidden bg-neutral-950 text-white
      ">
        
      <MenuSection images={images}/>
      <BackgroundImage />

      </main>
    </SelectedImageProvider>
  );
}
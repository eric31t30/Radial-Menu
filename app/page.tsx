
import { Suspense } from "react";
import RadialMenu from "@/components/RadialMenu";
import MainLoader from "@/components/loaders/MainLoader";
import { SelectedImageProvider } from "@/context/SelectedImageContext";

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

async function RadialMenuWrapper() {
  const images = await fetchImages();
  return <RadialMenu images={images} />;
}

export default function HomePage() {
  return (
    <SelectedImageProvider >
      <main className="
        relative flex min-h-screen items-center justify-center 
        overflow-hidden bg-neutral-950 text-white
      ">
        <Suspense fallback={<MainLoader />}>
          <RadialMenuWrapper />
        </Suspense>
      </main>
    </SelectedImageProvider>
  );
}
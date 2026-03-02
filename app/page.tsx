import RadialMenu from "@/components/RadialMenu";

async function fetchImages() {
  try {
    const res = await fetch("http://localhost:3000/api/images", {
      cache: "no-store",
    });

    if(!res.ok){
      throw new Error("Failed to fetch images");
    }
    
    console.log(res);
    
    return res.json();

  } catch (err) {
    console.log(err);
  }
}

export default async function HomePage() {

  const images = await fetchImages();

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-neutral-950 text-white">
      <div className="z-10 text-center">
        <RadialMenu  images={images}/>
      </div>
    </main>
  );
}
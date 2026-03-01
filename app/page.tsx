import RadialMenu from "@/components/RadialMenu";

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-neutral-950 text-white">
      <div className="z-10 text-center">
        <RadialMenu />
      </div>
    </main>
  );
}
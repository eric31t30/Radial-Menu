export default function MainLoader() {
    return (
        <div className="absolute t-0 l-0 size-full z-50 flex flex-col justify-center items-center gap-5">
      
            <div className="relative h-8 w-8">
                <div className="absolute inset-0 rounded-full border-2 border-white/10" />
                <div
                    className="absolute inset-0 rounded-full border-2 border-transparent border-t-white animate-spin"
                    style={{ animationDuration: "0.8s" }}
                />
                <div className="absolute inset-2.5 rounded-full bg-white/30 animate-pulse" />
            </div>

            <span className="text-xs font-medium text-white/60 tracking-widest uppercase">
                Cargando
            </span>
        </div>
    );
}
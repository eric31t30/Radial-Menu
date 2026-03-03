export default function MainLoader() {
    return (
        <div className="
            absolute t-0 l-0 size-full z-50 flex flex-col justify-center items-center gap-5
            sm:gap-8 lg:gap-12
        ">

            <div className="
                relative h-8 w-8 
                sm:h-12 sm:w-12 lg:h-22 lg:w-22 xl:h-18 xl:w-18 2xl:h-16 2xl:w-16
            ">
                <div className="absolute inset-0 rounded-full border-2 sm:border-[3px] lg:border-4 border-white/10" />
                <div
                    className="
                      absolute inset-0 rounded-full 
                      border-2 sm:border-[3px] lg:border-4
                      border-transparent border-t-white animate-spin
                    "
                    style={{ animationDuration: "0.8s" }}
                />
                <div className="
                    absolute inset-2.5 rounded-full bg-white/30 animate-pulse
                    sm:inset-4 lg:inset-7 xl:inset-6
                " />
            </div>

            <span className="text-xs sm:text-sm lg:text-2xl xl:text-xl 2xl:text-lg font-medium text-white/60 tracking-widest uppercase">
                Cargando
            </span>
        </div>
    );
}
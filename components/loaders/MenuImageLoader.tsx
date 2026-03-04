type Props = {
    loaded: boolean
}

function MenuImageLoader({ loaded }: Props) {
  return (
    <div className={`
        relative size-[105%] flex justify-center items-center rounded-full bg-[#1b1a1a] pointer-events-none
        transition duration-700 ${loaded ? "opacity-0" : "opacity-100"}
    `}>
        <div className="
            relative h-8 w-8 
            sm:h-12 sm:w-12 lg:h-22 lg:w-22 xl:h-14 xl:w-14 2xl:h-16 2xl:w-16
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
    </div>
  )
}

export default MenuImageLoader
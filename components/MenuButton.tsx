import Image from "next/image";

type Props = {
  icon: string;
  alt: string;
  color: string;
  border: string;
  borderColor: string;
  buttonClass?: string;
  iconClass?: string;
  active?: boolean;
  onClick?: () => void;
  size?: string;
  position: string;
}

function MenuButton({ icon, alt, color, border, borderColor, buttonClass, iconClass, active, onClick, size, position }: Props) {
  return (
    <div className={`
      relative w-full 
      flex justify-center items-center z-50 
      ${position}
    `}
    >
      <button
        className={`
          relative ${size} ${color} ${border} ${buttonClass}
          text-2xl text-black
          flex items-center justify-center cursor-pointer
          transition duration-400 hover:scale-105
          active:scale-95
          
        `}
        onClick={onClick}
      >
        <Image
          src={icon}
          alt={alt}
          width={26}
          height={26}
          quality={90}
          className={`size-[50%] transition duration-700 ${iconClass ?? ""}`}
        />

        <span className={`
          size-[120%] ${border}
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          border ${borderColor}
          pointer-events-none
          transition duration-700 ${active ? "opacity-100" : "opacity-0"}
          lg:border-2 lg:size-[130%]
        `} />
      </button>
    </div>
  );
}

export default MenuButton;
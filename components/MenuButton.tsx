import Image from "next/image";

type Props = {
  icon: string;
  alt: string;
  color: string;
  borderColor: string;
  iconClass?: string;
  active?: boolean;
  onClick?: () => void;
  size?: string;
}

function MenuButton({ icon, alt, color, borderColor, iconClass, active, onClick, size = "size-9" }: Props) {
  return (
    <button
      className={`
        relative ${size} ${color}
        text-2xl text-black rounded-full z-50
        flex items-center justify-center cursor-pointer transition duration-500 hover:scale-105
      `}
      onClick={onClick}
    >
      <Image
        src={icon}
        alt={alt}
        width={26}
        height={26}
        quality={90}
        className={`size-4 transition duration-700 ${iconClass ?? ""}`}
      />

      <span className={`
        size-[130%] rounded-full
        absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        border ${borderColor}
        pointer-events-none
        transition duration-700 ${active ? "opacity-100" : "opacity-0"}
      `}/>
    </button>
  );
}

export default MenuButton;
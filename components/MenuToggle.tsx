"use client"
import Image from 'next/image'

type Props = {
  onToggle: () => void
}

function MenuToggle({ onToggle }: Props) {

  return (
    <button className="
      size-8 bg-black/50 z-10
      absolute right-6 bottom-6 
      flex items-center justify-center
      cursor-pointer border rounded-full
      backdrop-blur-md
      transition duration-500 hover:-translate-y-1 hover:scale-105
      sm:size-10
      xl:size-12 xl:right-8 xlbottom-8 
    "
    onClick={()=> onToggle()}
    >
      <Image
      src={"/icons/hide.svg"} 
      alt="Check" 
      width={16} 
      height={16} 
      quality={90} 
      className="invert size-[60%]"
      />
    </button>
  )
}

export default MenuToggle
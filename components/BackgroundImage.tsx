"use client"
import { useSelectedImage } from '@/context/SelectedImageContext'
import Image from 'next/image'
import { useEffect, useState } from 'react'

function BackgroundImage() {
  const { selectedImage } = useSelectedImage()
  const [displayImage, setDisplayImage] = useState<string | null>(null)
  const [nextImage, setNextImage] = useState<string | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    if (!selectedImage) return

    if (displayImage === null) {
      setTimeout(() => setDisplayImage(selectedImage.url), 0)
      return
    }

    if (displayImage !== selectedImage.url) {
      const img = new window.Image()
      img.src = selectedImage.url
      img.onload = () => {
  
        setNextImage(selectedImage.url)
        setIsTransitioning(true)
        setTimeout(() => setIsTransitioning(false), 50)
      }
    }
  }, [selectedImage, displayImage])

  const handleTransitionEnd = () => {
    if (nextImage) {
      setDisplayImage(nextImage)
      setNextImage(null)
    }
  }

  return (
    <div className='absolute inset-0 z-0 brightness-80'>

      {displayImage && (
        <Image
          key={`current-${displayImage}`}
          src={displayImage}
          alt="Imagen de fondo"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={100}
        />
      )}

      {nextImage && (
        <div
          className={`
            absolute inset-0 transition-opacity duration-700 
            ${!isTransitioning ? 'opacity-100' : 'opacity-0'}
          `}
          onTransitionEnd={handleTransitionEnd}
        >
          <Image
            src={nextImage}
            alt="Imagen de fondo siguiente"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={100}    
          />
        </div>
      )}
    </div>
  )
}

export default BackgroundImage
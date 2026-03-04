"use client"
import { useSelectedImage } from '@/context/SelectedImageContext'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'
import type { ImageItem } from '@/types/ImageItem'

type Props = {
  images: ImageItem[]
}

function BackgroundImage({ images }: Props) {
  const { selectedImage } = useSelectedImage()
  const [displayImage, setDisplayImage] = useState<string | null>(null)
  const [nextImage, setNextImage] = useState<string | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const imageCache = useRef<Set<string>>(new Set())

  useEffect(() => {
    images.forEach((image) => {
      if (!imageCache.current.has(image.url)) {
        const img = new window.Image()
        img.src = image.url
        imageCache.current.add(image.url)
      }
    })
  }, [images])

  useEffect(() => {
    if (!selectedImage) return

    if (displayImage === null) {
      setTimeout(() => setDisplayImage(selectedImage.url), 0)
      return
    }

    if (displayImage !== selectedImage.url) {
      if (imageCache.current.has(selectedImage.url)) {
        setTimeout(() => {
          setNextImage(selectedImage.url)
          setIsTransitioning(true)
        }, 0)
        
        setTimeout(() => setIsTransitioning(false), 50)
      } else {

        const img = new window.Image()
        img.src = selectedImage.url
        img.onload = () => {
          imageCache.current.add(selectedImage.url)
          setNextImage(selectedImage.url)
          setIsTransitioning(true)
          setTimeout(() => setIsTransitioning(false), 50)
        }
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
    <div className='absolute inset-0 z-0 brightness-75'>

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
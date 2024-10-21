import { StaticImageData } from 'next/image'
import { FC, useEffect } from 'react'
import Image from 'next/image'

interface IFullScreenImage {
    src: StaticImageData | undefined
    open: boolean
    close: () => void // close should be a function to handle closing
}

const FullScreenImage: FC<IFullScreenImage> = ({ open, src, close }) => {

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [open])

  console.log(src)
  return (

    <div className="fixed inset-0 z-[999999999999] flex items-center justify-center bg-black ">
      <div className="absolute top-4 right-4 cursor-pointer" onClick={close}>
        <span className="text-white text-2xl">✖</span> {/* Yopish tugmasi */}
      </div>
      {
        src?.src ? ( <Image src={src.src}  quality={100} width={350} height={500} alt="Fullscreen" className="max-w-full max-h-full object-contain" />) : null
      }
    </div>
  )
}

export default FullScreenImage

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

    <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-black  bg-opacity-85">
      <div className="absolute top-[50px] left-[30px] 2xl:left-auto 2xl:top-[80px] 2xl:right-[500px] cursor-pointer z-[9999999]" onClick={close}>
        <span className="text-white text-2xl">✖</span> {/* Yopish tugmasi */}
      </div>
      {
        src?.src ? ( <Image src={src.src}  quality={100} width={350} height={500} alt="Fullscreen" className=" object-contain w-full h-[400px] 2xl:h-[500px] rounded-[20px]" />) : null
      }
    </div>
  )
}

export default FullScreenImage

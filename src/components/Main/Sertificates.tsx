'use client';
import { FC, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Title from '@/ui/Title';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const images = [
  { url: "https://ucarecdn.com/62baa773-19f2-4b34-83e8-74b0b4b946cc/-/preview/975x651/" },
  { url: "https://ucarecdn.com/62baa773-19f2-4b34-83e8-74b0b4b946cc/-/preview/975x651/" },
  { url: "https://ucarecdn.com/62baa773-19f2-4b34-83e8-74b0b4b946cc/-/preview/975x651/" },
  { url: "https://ucarecdn.com/62baa773-19f2-4b34-83e8-74b0b4b946cc/-/preview/975x651/" },
  { url: "https://ucarecdn.com/62baa773-19f2-4b34-83e8-74b0b4b946cc/-/preview/975x651/" },
  { url: "https://ucarecdn.com/62baa773-19f2-4b34-83e8-74b0b4b946cc/-/preview/975x651/" },
  { url: "https://ucarecdn.com/62baa773-19f2-4b34-83e8-74b0b4b946cc/-/preview/975x651/" },
  { url: "https://ucarecdn.com/62baa773-19f2-4b34-83e8-74b0b4b946cc/-/preview/975x651/" },
  { url: "https://ucarecdn.com/62baa773-19f2-4b34-83e8-74b0b4b946cc/-/preview/975x651/" },
  { url: "https://ucarecdn.com/62baa773-19f2-4b34-83e8-74b0b4b946cc/-/preview/975x651/" },
  { url: "https://ucarecdn.com/62baa773-19f2-4b34-83e8-74b0b4b946cc/-/preview/975x651/" },
  { url: "https://ucarecdn.com/62baa773-19f2-4b34-83e8-74b0b4b946cc/-/preview/975x651/" },
  { url: "https://ucarecdn.com/62baa773-19f2-4b34-83e8-74b0b4b946cc/-/preview/975x651/" },
  { url: "https://ucarecdn.com/62baa773-19f2-4b34-83e8-74b0b4b946cc/-/preview/975x651/" },
  // More images...
];

gsap.registerPlugin(ScrollTrigger);

const Sertificates: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        opacity: 0,
        x: 100,
        duration: 4,
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 90%',
          end: 'top 50%',
          scrub: true,
        },
      });

      // Swiper animation
      gsap.from(swiperRef.current, {
        opacity: 0,
        x: -250,
        duration: 5,
        scrollTrigger: {
          trigger: swiperRef.current,
          start: 'top 90%',
          end: 'top 40%',
          scrub: true,
        },
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className=' overflow-hidden'>
      <div className="mt-[100px] 2xl:mt-[170px] 2xl:pl-[180px]">
        <div className="flex flex-col py-[40px] px-[20px]">
          <div ref={titleRef}>
            <Title text={{ ru: 'Сертификаты и достижения', uz: 'Sertifikat va Yutuqlar' }} />
          </div>

          <div className="2xl:mt-[40px]" ref={swiperRef}>
            <Swiper
              modules={[Navigation]}
              navigation={false} // Disable default navigation
              slidesPerView={1}
              spaceBetween={20}
              speed={600}
              breakpoints={{
                1024: {
                  slidesPerView: 6,
                },
                800: {
                  slidesPerView: 1.7,
                },
                700: {
                  slidesPerView: 1,
                },
                1200: {
                  slidesPerView: 3.5,
                },
              }}
            >
              {images.map((img, index) => (
                <SwiperSlide key={index} className="mt-[30px]">
                  <PhotoProvider>
                    <PhotoView src={img.url}>
                      <Image
                        src={img.url}
                        alt={`Certificate ${index + 1}`}
                        width={975}
                        height={651}
                        className="cursor-pointer h-[450px] w-full object-cover"
                      />
                    </PhotoView>
                  </PhotoProvider>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sertificates;

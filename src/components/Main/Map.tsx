"use client"


import {FC  , useState , useEffect} from 'react';


const YandexMap: FC = () => {
    const [mapLoaded, setMapLoaded] = useState(false); // State to ensure the map is loaded once
  const [mapInstance, setMapInstance] = useState<any>(null); // Store the map instance

  useEffect(() => {
    const loadYandexMap = () => {
      // Check if the script is already loaded
      if (window.ymaps && !mapLoaded) {
        setMapLoaded(true);
        if (!mapInstance) {
          initializeMap();
        }
        return;
      }

      // Load the Yandex Maps script
      const script = document.createElement('script');
      script.src = `https://api-maps.yandex.ru/2.1/?apikey=5771415d-001f-4699-b102-0fb2f6af965a&lang=ru_RU`;
      script.async = true;
      script.defer = true
      script.onload = () => {
        window.ymaps.ready(() => {
          initializeMap();
        });
      };
      script.onerror = () => {
        console.error("Failed to load Yandex Maps API");
      };
      document.body.appendChild(script);
    };

    const initializeMap = () => {
      // Check if Yandex Maps API is loaded and ready
      if (window.ymaps) {
        const map = new window.ymaps.Map('map', {
          center: [41.351469, 69.289004],
          zoom: 17,
          controls: [],
        });

        const placemark = new window.ymaps.Placemark(
          [41.351469, 69.289004],
          {
            hintContent: 'Ташкент',
            balloonContent: 'Чинобод 2, метро Шахристан',
          },
          {
            iconLayout: 'default#image',
            iconImageHref: 'https://ucarecdn.com/6a2da0ff-5a91-4beb-bf6b-8a08dadde686/-/preview/42x49/', // Ikonaning URL manzili (bu yerga rasm manzilini qo'shishingiz kerak)
            iconImageOffset: [-15, -42], // Ikonaning joylashuvi
          }
        );

        map.geoObjects.add(placemark);
        setMapInstance(map); // Store the map instance
        setMapLoaded(true);
      } else {
        console.error("Yandex Maps API is not available.");
      }
    };

    // Load the map if it's not loaded
    if (!mapLoaded) {
      loadYandexMap();
    }
  }, [mapLoaded, mapInstance]);

  return (
    <div className="rounded-[30px] mt-[20px] overflow-hidden w-full mdl:mt-[40px] 2xl:h-[400px]">
    <div className='h-[300px] mdl:h-[400px]'>
      <div id="map" className="w-full h-full" />
    </div>
  </div>
  );
};

export default YandexMap;
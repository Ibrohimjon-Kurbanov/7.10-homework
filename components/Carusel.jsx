import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";

import { Autoplay, FreeMode } from "swiper/modules";
import CryptoCard from "./CryptoCard";
import { useEffect, useState } from "react";
import axios from "axios";
function Carusel() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h"
      )
      .then((response) => {
        if (response.status == 200) {
          setData(response.data);
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="bg-[url('../images/home-bg.png')] bg-no-repeat bg-cover bg-center pt-[54px] pb-[36px]">
      <div className="text-center">
        <h1 className="text-[60px] font-bold leading-[72px] tracking-[-0.5px] text-[#87CEEB]">
          CRYPTOFOLIO WATCH LIST
        </h1>
        <p className="text-sm font-medium leading-[21.98px] tracking-[0.1px] text-[rgb(169_169_169)] mb-10">
          Get all the Info regarding your favorite Crypto Currency
        </p>
      </div>
      <div className="w-full max-w-[1232px] h-[134px] mx-auto px-6 text-white select-none">
        <Swiper
          slidesPerView={4}
          freeMode={true}
          modules={[Autoplay, FreeMode]}
          spaceBetween={40}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          className="mySwiper"
          loop={true}
        >
          {data.length > 0 &&
            data.map((crypto, index) => {
              return (
                <SwiperSlide key={index}>
                  <CryptoCard crypto={crypto}></CryptoCard>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
}
export default Carusel;

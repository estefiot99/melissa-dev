import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export default function FactsCarousel() {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={16}
      slidesPerView={1}
      loop
      pagination={{ clickable: true }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false
      }}
      style={{ paddingBottom: '20px' }}
    >
      <SwiperSlide>
        <div className="card">
          <div className="fact">
            <img src={'/images/emojis/coffee.png'} alt="" />
            <p>
              Powered by <span>coffee</span> and good playlists.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card">
          <div className="fact">
            <img src={'/images/emojis/soccer.png'} alt="" />
            <p>
              Big soccer fan and lifelong supporter of <span>Barcelona</span>.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card">
          <div className="fact">
            <img src={'/images/emojis/plane.png'} alt="" />
            <p>
              I love <span>traveling</span> and exploring new places
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

// import required modules
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';

import "./slider.css"
import { HiChevronLeft , HiChevronRight } from "react-icons/hi";

const Slider = () => {
    return (
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect={'fade'}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }}
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="/banner-1.png" alt="Banner 1" /></SwiperSlide>
        <SwiperSlide><img src="/banner-2.png" alt="Banner 2" /></SwiperSlide>
        <SwiperSlide><img src="/banner-3.png" alt="Banner 3" /></SwiperSlide>
        <SwiperSlide><img src="/banner-4.png" alt="Banner 4" /></SwiperSlide>
        <div className='swipper-buttons'>
            <span className="swiper-button-prev"><HiChevronLeft /></span>
            <span className="swiper-button-next"><HiChevronRight/></span>
        </div>
       
        
      </Swiper>
    )
}

export default Slider;
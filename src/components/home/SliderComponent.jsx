import React from 'react';
import './SliderComponent.css';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const SliderComponent = () => {

  return (
    <Swiper
      className='swiper-main-container'
      slidesPerView={1}
      pagination={{ clickable: true }} modules={[Pagination]}
    >
      <SwiperSlide>
        <div className='slider-item-container'>
          <div className='slider-header-back'></div>
          <div className='slider-header'>
            New Shoes!
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='slider-item-container'>
          <div className='slider-header-back'></div>
          <div className='slider-header'>
            New Shoes!
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='slider-item-container'>
          <div className='slider-header-back'></div>
          <div className='slider-header'>
            New Shoes!
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='slider-item-container'>
          <div className='slider-header-back'></div>
          <div className='slider-header'>
            New Shoes!
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default SliderComponent
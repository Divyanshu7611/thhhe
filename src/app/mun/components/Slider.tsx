'use client'
import React from 'react'
import bgimage from '../assets/CommitteBg.png'
import Image from 'next/image'
import { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import mun from '../assets/mun1.png'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/zoom'
import 'swiper/css/navigation'

// import required modules
import { Zoom, Autoplay, Pagination, Navigation } from 'swiper/modules'

export default function Slider() {
  return (
    <div className="bg-white text-black">
      <div className="relative">
        <Image alt="" src={bgimage} fill />
        <div className="w-[980px] flex flex-col mx-auto py-20">
          <div className="flex items-center">
            <div className="bg-[#7A7171] h-1 w-16"></div>
            <p className="text-[#7A7171]">We’ve got a committee for everyone</p>
          </div>
          <div className="">
            <Swiper
              zoom={true}
              loop={true}
              spaceBetween={0}
              slidesPerView={3}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide className="p-8">
                <Image alt="" src={mun} />
                <h4 className="font-bold">Indian Politics</h4>
              </SwiperSlide>
              <SwiperSlide className="p-8">
                <Image alt="" src={mun} />
                <h4 className="font-bold">Indian Politics</h4>
              </SwiperSlide>
              <SwiperSlide className="p-8">
                <Image alt="" src={mun} />
                <h4 className="font-bold">Indian Politics</h4>
              </SwiperSlide>
              <SwiperSlide className="p-8">
                <Image alt="" src={mun} />
                <h4 className="font-bold">Indian Politics</h4>
              </SwiperSlide>
              <SwiperSlide className="p-8">
                <Image alt="" src={mun} />
                <h4 className="font-bold">Indian Politics</h4>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

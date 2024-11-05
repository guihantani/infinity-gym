import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import './Carrosel.css'

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Carrosel() {
  useEffect(() =>{
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.registerPlugin(ScrollTrigger);

        let tlText = gsap.timeline({
            scrollTrigger:{
                trigger: ('.carroselContainer'),
                start: 'top 85%',
                end: 'bottom 60%'
            }
        })

        tlText.fromTo(('.carroselTitulo'),{opacity: 0, scale: 2}, {opacity: 1, scale: 1})
    });
})

  return (
    <section className="carroselContainer">
      <h1 className="carroselTitulo">nosso espaço</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src='/images/carrosel/carrosel1.jpg' alt="Imagem da academia" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/carrosel/carrosel2.jpg' alt="Imagem da academia" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/carrosel/carrosel3.jpg' alt="Imagem da academia" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/carrosel/carrosel4.jpg' alt="Imagem da academia" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/carrosel/carrosel5.jpg' alt="Imagem da academia" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/carrosel/carrosel6.jpg' alt="Imagem da academia" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/carrosel/carrosel7.jpg' alt="Imagem da academia" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <img src='/images/arrow1.png' width='30px'/>
          </div>
          <div className="swiper-button-next slider-arrow">
            <img src='/images/arrow2.png' width='30px'/>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </section>
  );
}

export default Carrosel;
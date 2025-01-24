import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import slide1 from "../../assets/slide1.png";
import slide2 from "../../assets/slide2.png";
import slide3 from "../../assets/slide3.png";

function SwiperSlider({ children }) {
    return (
        <section className="swiper-slider-wrap">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={3}
                    slidesPerView={1}
                    pagination
                    autoplay={{ delay: 3000 }}
                    loop
                >
                    <SwiperSlide>
                        <img
                            src={slide1}
                            alt="Slide 1"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={slide2}
                            alt="Slide 2"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={slide3}
                            alt="Slide 3"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </SwiperSlide>
                </Swiper>
        </section>
    );
}

export default SwiperSlider;
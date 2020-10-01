import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Navigation, Pagination]);

const Slider = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <div className="slide">
                    <div className="slide-container">
                        <div className="slide-content">
                            <h2>
                                Men Ezy <br /> Ankle Pants
                            </h2>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Ullam, distinctio temporibus.
                                Sunt, quidem. Quia velit aut cupiditate impedit
                                ipsam!
                            </p>
                            <div className="slide-buttons">
                                <button class="btn btn-basic btn-margin-right">
                                    Discover more
                                </button>
                                <button class="btn btn-basic btn-margin-right">
                                    Read about
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;

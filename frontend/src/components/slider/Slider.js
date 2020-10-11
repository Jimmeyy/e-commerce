import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';
import { Slide } from 'components';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Navigation, Pagination]);

const Slider = ({ sliderConfig, slides }) => {
    const { spaceBetween, slidesPerView, navigation } = sliderConfig;

    return (
        <Swiper
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
            navigation={navigation}
            pagination={{ clickable: true }}
        >
            {slides.map((slide) => {
                return (
                    <SwiperSlide>
                        <Slide slideContent={slide} />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

Slider.propTypes = {
    sliderConfig: PropTypes.array.isRequired,
    slides: PropTypes.array.isRequired,
};

export default Slider;

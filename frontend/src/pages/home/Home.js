import React from 'react';
import { Slider } from 'components';
import homeContent from 'static/content/home.json';

const sliderConfig = {
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: true,
};

const Home = () => {
    return (
        <div className="page home-page">
            <Slider sliderConfig={sliderConfig} slides={homeContent.slider} />
            <div className="container"></div>
        </div>
    );
};

export default Home;

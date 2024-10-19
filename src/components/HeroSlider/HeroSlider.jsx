import React, { useEffect, useState } from 'react';
import classes from './HeroSlider.module.css';
import Slider from "react-slick";
import Slider1 from '../../assets/img/slider-image-1.jpeg';
import Slider2 from '../../assets/img/slider-image-2.jpeg';
import Slider3 from '../../assets/img/slider-image-3.jpeg';

const images = [Slider1, Slider2, Slider3];

export default function HeroSlider() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 1000
    };

    return <>
        <div className=" max-md:w-full w-3/4 mx-auto mt-5">
            <Slider {...settings}>
                <img src={Slider1} alt="Slider1" className='w-full h-[400px]' />
                <img src={Slider2} alt="Slider2" className='w-full h-[400px]' />
                <img src={Slider3} alt="Slider3" className='w-full h-[400px]' />
            </Slider>
        </div>
    </>;
}

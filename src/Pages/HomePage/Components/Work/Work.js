import React from 'react';
import './Work.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import carousel1 from '../../../../images/carousel-1.png'
import carousel2 from '../../../../images/carousel-2.png'
import carousel3 from '../../../../images/carousel-3.png'
import carousel4 from '../../../../images/carousel-4.png'
import carousel5 from '../../../../images/carousel-5.png'


const Work = () => {
    return (
        <div className="dark-bg">
            <div className="container">
                <OwlCarousel
                    className="owl-theme"
                    loop
                    margin={10}
                    nav
                    autoplay = {true}
                >
                    <div className="item w-85"><img src={carousel1} alt="..."/></div>
                    <div className="item w-85"><img src={carousel2} alt="..."/></div>
                    <div className="item w-85"><img src={carousel3} alt="..."/></div>
                    <div className="item w-85"><img src={carousel4} alt="..."/></div>
                    <div className="item w-85"><img src={carousel5} alt="..."/></div>
                </OwlCarousel>
            </div>
        </div>
    );
};

export default Work;
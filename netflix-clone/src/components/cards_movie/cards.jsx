import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import cards_data from '../../assets/cards/Cards_data';
import cards1_data from '../../assets/cards2/Cards-data';
import cards3_data from '../../assets/cards3/Cards_data';
import cards4_data from '../../assets/cards4/Cards_data';
import { IoMdPlay } from "react-icons/io";
import './cards.css';

const Cards = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="cards-container">
            <h2>Popular on Netflix</h2>
            <Slider {...settings} >
                {cards_data.map((card, index) => (
                    <div className="card" key={index}>
                        <img src={card.image} alt={card.name} />
                        <p>{card.name}</p>
                    </div>
                ))}
            </Slider>
            <h2>Most Watched On Netflix</h2>
            <Slider {...settings} >
                {cards1_data.map((card, index) => (
                    <div className="card" key={index}>
                        <img src={card.image} alt={card.name} />
                        <p>{card.name}</p>
                    </div>
                ))}
            </Slider>
            <h2>Made in India</h2>
            <Slider {...settings} >
                {cards3_data.map((card, index) => (
                    <div className="card" key={index}>
                        <img src={card.image} alt={card.name} />
                        <p>{card.name}</p>
                    </div>
                ))}
            </Slider>
            <h2>K-Dramas</h2>
            <Slider {...settings} >
                {cards4_data.map((card, index) => (
                    <div className="card" key={index}>
                        <img src={card.image} alt={card.name} />
                        <p>{card.name}</p>
                    </div>
                ))}
            </Slider>
        </div>
         
    );
    
   
}

export default Cards;


import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import image1 from '../../images/1.jpg';
import image2 from '../../images/2.jpg';
import image3 from '../../images/3.jpg';
import image4 from '../../images/4.webp';
import image5 from '../../images/5.jpg';
import image6 from '../../images/6.jpg';
import image7 from '../../images/7.jpg';
import image8 from '../../images/8.jpg';
import image9 from '../../images/9.jpg';
import "./Slider.css"

function Slider() {
    const datas = [
        {
            id:1,
            image: `${image1}`,
            title: "Titre du slider1",
        },
        {
            id:2,
            image: `${image2}`,
            title: "Titre du slider1",
        }, {
            id:3,
            image: `${image3}`,
            title: "Titre du slider1",
        }, {
            id:4,
            image: `${image4}`,
            title: "Titre du slider1",
        }, {
            id:5,
            image: `${image5}`,
            title: "Titre du slider1",
        }, {
            id:6,
            image: `${image6}`,
            title: "Titre du slider1",
        }, {
            id:7,
            image: `${image7}`,
            title: "Titre du slider1",
        },{
            id:8,
            image: `${image8}`,
            title: "Titre du slider1",
        },{
            id:9,
            image: `${image9}`,
            title: "Titre du slider1",
        }
    ]
    return (

        <Carousel
        autoPlay
        interval={6000}
        infiniteLoop
        thumbWidth={120}
        showIndicators={false}
        showStatus={false}
        
        >
           {datas.map ( slide => (
               <div key={slide.id}>
                   <img src={slide.image} alt="" />
                   <div className="overlay">
                       <h2 className="overlay__title">{slide.title}</h2>
                       <p className="overlay__text"></p>
                   </div>
               </div>
           ))}
        </Carousel>
    )
}

export default Slider;

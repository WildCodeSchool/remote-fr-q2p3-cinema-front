import React, { Component } from "react";
import Slider from "react-slick";
import image1 from '../../images/1.jpg';
import image2 from '../../images/2.jpg';
import image3 from '../../images/3.jpg';
import image4 from '../../images/4.webp';
import image5 from '../../images/5.jpg';
import image6 from '../../images/6.jpg';
import image7 from '../../images/7.jpg';
import image8 from '../../images/8.jpg';
import image9 from '../../images/9.jpg';
import './Slider.css';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> Carousel</h2>
        <Slider {...settings}>
          <div>
            <h3>{image1}</h3>
          </div>
          <div>
            <h3>{image2}</h3>
          </div>
          <div>
            <h3>{image3}</h3>
          </div>
          <div>
            <h3>{image4}</h3>
          </div>
          <div>
            <h3>{image5}</h3>
          </div>
          <div>
            <h3>{image6}</h3>
          </div>
          <div>
            <h3>{image7}</h3>
          </div>
          <div>
            <h3>{image8}</h3>
          </div>
          <div>
            <h3>{image9}</h3>
          </div>
        </Slider>
      </div>
    );
  }
}


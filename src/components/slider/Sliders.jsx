import React from "react";
import Slider from "react-slick";
import image1 from '../../images/1.jpg'
import image2 from '../../images/2.jpg';
import image4 from '../../images/4.jpg';
import image5 from '../../images/5.jpg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Slider.css';


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "white" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}jk
      style={{ ...style, display: "block", background: "white" }}
      onClick={onClick}
    />
  );
}

function Sliders() {

    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6500,
      pauseOnHover: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (

      <div className="Slider">
        <div className="image-container-carousel">
          <Slider {...settings}>
            <div className="slide">
            <img className="image" alt='image1' src={image1}/>
            </div>
            <div className="slide">
            <img className="image" alt='image2' src={image2} />
            </div>
            <div className="slide">
            <img className="image" alt='image4' src={image4} />
            </div>
            <div className="slide">
            <img className="image" alt='image5' src={image5} />
            </div>   
          </Slider>
        </div>
      </div>
    )
  }

export default Sliders;
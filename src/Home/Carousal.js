import React from "react";
import Slider from "react-slick";
import "./Carousal.css";

function Carousal() {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <Slider {...settings} className="slider">
      <div>
        <img
          src="https://i.pinimg.com/originals/f4/30/69/f430690364b75733fea50cd0629d5fc5.jpg"
          alt=""
        />
      </div>

      <div>
        <img
          src="https://i.pinimg.com/originals/5e/36/19/5e3619ef7aa14aa923d25c26da6daef8.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://wallpaperaccess.com/full/781827.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://assets.sentinelassam.com/h-upload/2021/01/19/190294-mirzapur-season-2-review-1-1.webp?w=400&dpr=2.6"
          alt=""
        />
      </div>
    </Slider>
  );
}

export default Carousal;

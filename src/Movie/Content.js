import React, { useRef } from "react";
import Slider from "react-slick";
import BigCard from "./BigCard";
import "./Content.css";
import movies from "./movie.json";
import music from "./music.json";
import { Link } from "react-router-dom";
import sports from "./sports.json"

function Content() {
  
   let x = window.outerWidth > 600;
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 2500,
    slidesToShow: x && 4 || 2,
    slidesToScroll: 2,
    arrows: false,
  };
  return (
    
    <div className="content">
        <div className="banner">
          <img src="https://m.media-amazon.com/images/S/sonata-images-prod/UK_Superhero_Acquisition_FT_April_2021_V2/ec12117a-ee48-453c-9a64-4453031d477a._UR3000,600_.jpeg" alt="" />
    </div>
        <div className="movies">
      <h1>Movies</h1>
      <Slider {...settings} className="slider">
        {movies.map((i) => {
          return (
            <Link to={{pathname: `/${i.id}`}} key={i.id}>
            <div>
              <BigCard {...i} />
            </div>
            </Link>
          );
        })}
      </Slider>
      </div>
      <div className="music">
      <h1>Music</h1>
      <Slider {...settings} className="slider">
        {music.map((i) => {
          return (
            <Link to={{pathname: `/${i.id}`}} key={i.id}>
            <div>
              <BigCard {...i} />
            </div>
            </Link>
          );
        })}
      </Slider>
      </div>
      <div className="banner">
          <img src="https://static.media.thinknum.com/media/uploads/blog/.thumbnails/amazonsports.jpg/amazonsports-1200x400.jpg" alt="" />
    </div>
    <div className="sports">
      <h1>Sports</h1>
      <Slider {...settings} className="slider">
        {sports.map((i) => {
          return (
            <Link to={{pathname: `/${i.id}`}} key={i.id}>
            <div>
              <BigCard {...i} />
            </div>
            </Link>
          );
        })}
      </Slider>
      </div>
    </div>
    
  );
}

export default Content;

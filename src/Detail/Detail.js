import React from "react";
import "./Detail.css";

function Detail(props) {
  return (
    
      <div
        className="detailCard"
        style={{
          backgroundImage: `linear-gradient(to right, rgb(0, 0, 0) 40%, transparent 80%),
                    url(${props.image})`,
        }}
      >
        <div className="name">
          <div className="description">
          <h1>{props.title}</h1>
          {props.rating &&
            <h4>Rating: {props.rating}</h4>}
          {props.releaseYear &&
            <h4>Year: {props.releaseYear}</h4>}
          {props.genre &&
            <h4>Genre: {props.genre}</h4>}
          </div>
          <div className="play">
          <a href={props.url}><button> ▶ Play Now </button></a>
          </div>
          <div className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore autem asperiores quia nisi molestiae magnam, veritatis numquam quidem placeat quaerat a iste? Nobis soluta obcaecati explicabo officia error possimus debitis, porro, odio, temporibus placeat quae repellat! Ducimus recusandae quas officia.
          </div>
        </div>
      </div>
    
  );
}

export default Detail;

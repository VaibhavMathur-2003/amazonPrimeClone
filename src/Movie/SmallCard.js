import React from "react";
import "./SmallCard.css";

function smallImg() {
  return (
    <>
    <div className="container-xl">
    <h3>Featuring</h3>
      <div className="row">
        <div className="col">
        <div className="smallImg">
          <img src="https://thumbs.dreamstime.com/b/web-215420654.jpg" alt="" />
        </div>
        </div>
        <div className="col">
        <div className="smallImg">
          <img src="https://wallpaperaccess.com/full/129005.jpg" alt="" />
        </div>
        </div>
        <div className="col">
        <div className="smallImg">
          <img
            src="https://i.pinimg.com/originals/bc/cd/d4/bccdd46d76e7f565448ba54c935b20a9.jpg"
            alt=""
          />
        </div>
        </div>
        <div className="col">
        <div className="smallImg">
          <img src="https://wallpaperaccess.com/full/342019.jpg" alt="" />
        </div>
        </div>
        <div className="col">
        <div className="smallImg">
          <img src="https://wallpapercave.com/wp/wp2488065.jpg" alt="" />
        </div>
        </div>
      </div>
      </div>
      
    </>
  );
}

export default smallImg;

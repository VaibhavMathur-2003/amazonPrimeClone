import React from "react";
import "./Navlist.css"

function Navlist() {
  return (
    <>
    <div className="navlist">
        <div className="navImg1">
    <img src="http://www.aftvnews.com/wp-content/uploads/2014/12/prime-instant-video-ultrahd-4k.jpg" alt="" />
    </div>
    <div className="navImg2">
    <img src="https://hd-report.com/wp-content/uploads/2017/06/amazon-prime-series-4k-4-20.jpg" alt="" />
    </div>
    <div className="navImg3">
    <img src="https://i.pinimg.com/736x/9c/cf/89/9ccf8998ab8b9a9bfe13b0d5911c840f.jpg" alt="" />
    </div>
    
      <div className="navOptions">
        <li className="option">Home</li>
        <li className="option">Movies</li>
        <li className="option">Prime Music</li>
        <li className="option">Prime Sports</li>
      </div>
      </div>
    </>
  );
}


export default Navlist;

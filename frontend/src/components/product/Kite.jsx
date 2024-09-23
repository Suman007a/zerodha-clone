import React from "react";

export default function Kite() {
  return (
    <div className="container">
      <div className="row m-5 p-5">
        <div className="col-7">
          <div>
            <img src="/public/images/kite.png" alt="kite"/>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-4 d-flex flex-column justify-content-center">
          <h2 className="pb-3">Kite</h2>
          <p style={{fontSize: "1.1rem"}}>
            Our ultra-fast flagship trading platform with streaming market data,
            advanced charts, an elegant UI, and more. Enjoy the Kite experience
            seamlessly on your Android and iOS devices.
          </p>
          <div className="d-flex" style={{gap: "60px"}}>
            <p>Try demo <i class="fa-solid fa-arrow-right-long"></i></p>
            <p>Try demo <i class="fa-solid fa-arrow-right-long"></i></p>
          </div>
          
          <div className="pt-4 d-flex" style={{gap: "15px"}} >
            <img src="/public/images/playstore.png" alt="playstor" width="150"/>
            <img src="/public/images/applestore.png" alt="applestore" width="150"/>
          </div>
        </div>
      </div>
    </div>
  );
}

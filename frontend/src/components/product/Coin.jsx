import React from "react";

export default function Coin() {
  return (
    <div className="container">
      <div className="row m-5 p-5">
        <div className="col-7">
          <div>
            <img src="/public/images/coin.png" alt="coin"/>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-4 d-flex flex-column justify-content-center">
          <h2 className="pb-3">Coin</h2>
          <p style={{fontSize: "1.1rem"}}>
          Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.
          </p>
          <div className="d-flex" style={{gap: "60px"}}>
            <p>Coin <i class="fa-solid fa-arrow-right-long"></i></p>
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

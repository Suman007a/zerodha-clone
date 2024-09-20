import React from "react";

export default function Varsity() {
  return (
    <div className="container">
      <div className="row mx-5 px-5">
        <div className="col-5">
          <div className="text-center pb-5">
            <img src="/public/images/varsity.png" alt="varsity" width="400"/>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-6 pt-5 ">
          <h4 className="pb-3">Free and open market education</h4>
          <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
          <a href="#">Varsity <i class="fa-solid fa-arrow-right"></i></a>
          <p className="pt-5">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <a href="#">TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
    </div>
  );
}

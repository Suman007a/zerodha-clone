import React from "react";

export default function Hero() {
  return (
    <div className="container">
      <div className="row text-center m-5 p-5">
        <div>
          <img src="/public/images/landing.png" alt="landing" width="800" />
        </div>
        <h1 className="pt-5 text-muted" style={{fontSize: "2.8rem"}}>Invest in everything</h1>
        <p className="pt-2 pb-4 fs-4">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
      </div>
    </div>
  );
}

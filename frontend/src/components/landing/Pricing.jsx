import React from "react";

export default function Pricing() {
  return (
    <div className="container">
      <div className="row m-5 p-5">
        <div className="col">
          <h2 className="pb-3">Unbeatable pricing</h2>
          <p style={{lineHeight: "30px"}}>
            We pioneered the concept of discount broking and price
            <br /> transparency in India. Flat fees and no hidden charges.
          </p>
          <p>
            <a href="">
              See pricing
            </a>
          </p>
        </div>
        <div className="col">
          <div className="d-flex">
            <div
              style={{ position: "relative", width: "180px", height: "100px" }}
            >
              <img src="public\images\pricing1.png" alt="pricing" width="115" />
              <div
                style={{
                  position: "absolute",
                  top: "30px",
                  left: "100px",
                  fontSize: "0.7rem",
                }}
              >
                Free account opening
              </div>
            </div>
            <div
              style={{ position: "relative", width: "250px", height: "100px" }}
            >
              <img src="public\images\pricing1.png" alt="pricing" width="115" />
              <div
                style={{
                  position: "absolute",
                  top: "30px",
                  left: "100px",
                  fontSize: "0.7rem",
                }}
              >
                Free equity delivery<br/> and direct mutual funds
              </div>
            </div>
            <div
              style={{ position: "relative", width: "180px", height: "100px" }}
            >
              <img src="public\images\pricing2.png" alt="pricing" width="115" />
              <div
                style={{
                  position: "absolute",
                  top: "30px",
                  left: "100px",
                  fontSize: "0.7rem",
                }}
              >
                Intraday and F&O
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

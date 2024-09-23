import React from "react";

export default function VarsityMobile() {
  return (
    <div className="container">
      <div className="row m-5 p-5">
        <div className="col-7">
          <div>
            <img src="/public/images/varsitymobile.png" alt="vaisitymobile" />
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-4 d-flex flex-column justify-content-center">
          <h2 className="pb-3">Varsity Mobile</h2>
          <p style={{ fontSize: "1.1rem" }}>
            An easy to grasp, collection of stock market lessons with in-depth
            coverage and illustrations. Content is broken down into bite-size
            cards to help you learn on the go.
          </p>

          <div className="pt-4 d-flex" style={{ gap: "15px" }}>
            <img
              src="/public/images/playstore.png"
              alt="playstor"
              width="150"
            />
            <img
              src="/public/images/applestore.png"
              alt="applestore"
              width="150"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

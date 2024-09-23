import React from "react";

export default function KiteConnectApi() {
  return (
    <div className="container">
      <div className="row mx-5 px-5">
        <div className="col-4 d-flex flex-column justify-content-center">
          <h2 className="pb-3 fs-2">Kite Connect API</h2>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.8rem" }}>
          Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.
          </p>
          <p>
           Kite Connect <i class="fa-solid fa-arrow-right-long"></i>
          </p>
        </div>
        <div className="col-1"></div>
        <div className="col-7">
          <div>
            <img src="/public/images/kiteconnectapi.png" alt="kiteconnectapi" width="650" />
          </div>
        </div>
      </div>
    </div>
  );
}

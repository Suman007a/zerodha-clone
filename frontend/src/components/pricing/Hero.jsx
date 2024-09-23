import React from "react";

export default function Hero() {
  return (
    <div className="container text-center">
      <div className="row m-5 p-5">
        <h1 style={{ fontSize: "2.9rem" }}>Charges</h1>
        <p className="text-muted" style={{ fontSize: "1.4rem" }}>
          List of all charges and taxes
        </p>
      </div>
      <div className="row m-5 p-5">
        <div className="col pt-5">
          <img src="/public/images/pricing1.png" width="250" />
          <h3 className="p-4 text-muted">Free equity delivery</h3>
          <p style={{fontSize: "1.1rem", lineHeight: "30px"}}>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col pt-5">
          <img src="/public/images/pricing2.png" width="250" />
          <h3 className="py-4 text-muted">Intraday and F&O trades</h3>
          <p style={{fontSize: "1.1rem", lineHeight: "30px"}}>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col pt-5">
          <img src="/public/images/pricing1.png" width="250" />
          <h3 className="p-4 text-muted">Free direct MF</h3>
          <p style={{fontSize: "1.1rem", lineHeight: "30px"}}>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function Team() {
  return (
    <div className="container">
      <div className="row mx-5 px-5 pb-5">
        <div className="col-5 " style={{ textAlign: "right" }}>
          <div className="pt-5 mt-5">
            <img
              src="/public/images/nikhilkamath.png"
              alt="nikhilkamath"
              width="300"
              style={{ borderRadius: "50%" }}
            />
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-6">
          <h1 className="pb-5">People</h1>
          <p className="pt-5">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on Homepage / TradingQnA / Twitter</p>
        </div>
      </div>
    </div>
  );
}

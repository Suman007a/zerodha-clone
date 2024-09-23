import React from "react";

export default function ZerodhaUniverse() {
  return (
    <div className="container">
      <div className="row m-5 p-5 text-center">
        <h5>
          Want to know more about our technology stack? Check out the
          Zerodha.tech blog.
        </h5>
      </div>
      <div className="row text-center">
        <h1 className="p-3">The Zerodha Universe</h1>
        <p style={{ fontSize: "1.1rem" }}>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row mx-5 px-5 pt-5">
        <div className="col text-center">
          <a href="" style={{ textDecoration: "none", color: "inherit" }}>
            <img
              src="/public/images/zerodhafundhouse.png"
              alt="zerodhafundhouse"
              width="200"
            />
            <br />
            <span
              style={{
                fontSize: "0.9rem",
                display: "inline-block",
                padding: "15px",
                width: "320px",
              }}
            >
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </span>
            <br /> <br /> <br />
            <img
              src="/public/images/streak.png"
              alt="zerodhafundhouse"
              width="200"
            />
            <br />
            <span
              style={{
                fontSize: "0.9rem",
                display: "inline-block",
                padding: "15px",
                width: "320px",
              }}
            >
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </span>
          </a>
        </div>
        <div className="col">
          <div className="col text-center">
            <a href="" style={{ textDecoration: "none", color: "inherit" }}>
              <img
                src="/public/images/sensibul.png"
                alt="sensibul"
                width="200"
              />
              <br />
              <span
                style={{
                  fontSize: "0.9rem",
                  display: "inline-block",
                  padding: "15px",
                  width: "320px",
                }}
              >
                Options trading platform that lets you create strategies,
                analyze positions, and examine data points like open interest,
                FII/DII, and more.
              </span>
              <br /> <br /> <br />
              <img
                src="/public/images/smallcase.png"
                alt="smallcase"
                width="200"
              />
              <br />
              <span
                style={{
                  fontSize: "0.9rem",
                  display: "inline-block",
                  padding: "15px",
                  width: "320px",
                }}
              >
                Thematic investing platform that helps you invest in diversified
                baskets of stocks on ETFs.
              </span>
            </a>
          </div>
        </div>
        <div className="col">
          <div className="col text-center">
            <a href="" style={{ textDecoration: "none", color: "inherit" }}>
              <img src="/public/images/tijori.png" alt="tijori" width="150" />
              <br />
              <span
                style={{
                  fontSize: "0.9rem",
                  display: "inline-block",
                  padding: "15px",
                  width: "320px",
                }}
              >
                Investment research platform that offers detailed insights on
                stocks, sectors, supply chains, and more.
              </span>
              <br /> <br /> <br /> 
              <img src="/public/images/ditto.png" alt="ditto" width="150" />
              <br />
              <span
                style={{
                  fontSize: "0.9rem",
                  display: "inline-block",
                  padding: "15px",
                  width: "320px",
                }}
              >
                Personalized advice on life and health insurance. No spam and no
                mis-selling. Sign up for free
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="row m-5 px-5 pb-4">
      <button className="p-2 fs-5 btn btn-primary" style={{width: "20%", margin: "auto"}}>Sign up for free</button>
      </div>
    </div>
  );
}

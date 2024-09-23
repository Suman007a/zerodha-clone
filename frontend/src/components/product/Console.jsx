import React from 'react'

export default function Console() {
  return (
    <div className="container">
        <div className="row mx-5 px-5">
            <div className="col-4 d-flex flex-column justify-content-center">
                <h2 className="pb-3 fs-2">Console</h2>
                <p style={{fontSize: "1.1rem", lineHeight: "1.8rem"}}>The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.</p>
                <p>Learn more <i class="fa-solid fa-arrow-right-long"></i></p>
            </div>
            <div className="col-1"></div>
            <div className="col-7">
                <div>
                <img src="/public/images/console1.png" alt="console" width="650"/>
                </div>
            </div>
        </div>
    </div>
  )
}

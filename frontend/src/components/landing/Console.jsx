import React from "react";

export default function Console() {
  return (
    <div className="container">
      <div className="row mx-5 p-5">
        <div className="col">
          <h2 className="pb-5">Trust with confidence</h2>
          <h4>Customer-first always</h4>
          <p className="pb-3">
            That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>
          <h4>No spam or gimmicks</h4>
          <p className="pb-3">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h4>The Zerodha universe</h4>
          <p className="pb-3">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h4>Do better with money</h4>
          <p>
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better
            <br /> with your money.
          </p>
        </div>
        <div className="col">
          <img src="/public/images/console.png" alt="console" width="600" />
          <div className="d-flex justify-content-center" style={{gap: "20px"}}>
            <p style={{fontSize: "1.1rem"}}>
              <a href="#">
                Explore our products <i class="fa-solid fa-arrow-right"></i>
              </a>
            </p>
            <p style={{fontSize: "1.1rem"}}>
              <a href="#">
                Try Kite demo <i class="fa-solid fa-arrow-right"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="text-center">
        <img src="/public/images/newspapers.png" width="700"/>
        </div>
        
      </div>
    </div>
  );
}

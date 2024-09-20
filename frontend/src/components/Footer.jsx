import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className="border-top">
      <div className="container pt-5">
        <div className="row mx-5 px-5">
          <div className="col">
            <div className="py-3">
              <img src="/public/images/zerodhaSmall.png" width="150" />
            </div>
            <p style={{ fontSize: "0.9rem" }}>
              © 2010 - 2024, Zerodha Broking Ltd. All rights reserved.
            </p>
            <div className="fs-5 border-bottom">
              <ul className={styles.socialMediaList}>
                <li>
                  <i class="fa-brands fa-x-twitter"></i>
                </li>
                <li>
                  <i class="fa-brands fa-facebook"></i>
                </li>
                <li>
                  <i class="fa-brands fa-instagram"></i>
                </li>
                <li>
                  <i class="fa-brands fa-linkedin-in"></i>
                </li>
              </ul>
            </div>
            <div className="fs-5 pt-2">
              <ul className={styles.socialMediaList}>
                <li>
                  <i class="fa-brands fa-youtube"></i>
                </li>
                <li>
                  <i class="fa-brands fa-whatsapp"></i>
                </li>
                <li>
                  <i class="fa-brands fa-telegram"></i>
                </li>
              </ul>
            </div>
          </div>
          <div className="col">
            <h5 className="pb-2">Company</h5>
            <ul
              style={{
                listStyle: "none",
                padding: "0",
                fontSize: "1rem",
                fontWeight: "450",
                lineHeight: "30px",
              }}
            >
              <li>About</li>
              <li>Products</li>
              <li>Pricing</li>
              <li>Referral programme</li>
              <li>Careers</li>
              <li>Zerodha.tech</li>
              <li>Press & media</li>
              <li>Zerodha Cares (CSR)</li>
            </ul>
          </div>
          <div className="col">
            <h5 className="pb-2">Support</h5>
            <ul
              style={{
                listStyle: "none",
                padding: "0",
                fontSize: "1rem",
                fontWeight: "450",
                lineHeight: "30px",
              }}
            >
              <li>Contact us</li>
              <li>Support portal</li>
              <li>Z-Connect blog</li>
              <li>List of charges</li>
              <li>Downloads & resources</li>
              <li>Videos</li>
              <li>Market overview</li>
              <li>How to file a complaint?</li>
              <li>Status of your complaints</li>
            </ul>
          </div>
          <div className="col">
            <h5 className="pb-2">Account</h5>
            <ul
              style={{
                listStyle: "none",
                padding: "0",
                fontSize: "1rem",
                fontWeight: "450",
                lineHeight: "30px",
              }}
            >
              <li>Open a account</li>
              <li>Fund transfer</li>
            </ul>
          </div>
        </div>
        <div className="row mx-5 px-5">
          <p style={{ fontSize: "0.7rem" }}>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to complaints@zerodha.com, for DP related to dp@zerodha.com.
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>
          <p style={{ fontSize: "0.7rem" }}>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>
          <p style={{ fontSize: "0.7rem" }}>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </p>
          <p style={{ fontSize: "0.7rem" }}>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p style={{ fontSize: "0.7rem" }}>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p style={{ fontSize: "0.7rem" }}>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>
        <div className="row">
          <div className={styles.footerEndLinks}>
            <p>NSE</p>
            <p>BSE</p>
            <p>MCX</p>
            <p>Terms & conditions</p>
            <p>Policies & procedures</p>
            <p>Privacy policy</p>
            <p>Disclosure</p>
            <p>For investor's attention</p>
            <p>Investor charter</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.HeroContainer}>
      <div className={styles.wrapper}>
        <h4 className={styles.SupportPortal}>Support Portal</h4>
        <a className={styles.TrackRequest}>Track tickets</a>
      </div>
      <div className={styles.inputContainer}>
        <div className={styles.inputContainerLeft}>
          <h4 style={{ color: "white" }} className="pb-4">
            Search for an answer or browse help topics to create a <br />
            ticket
          </h4>
          <input type="text" className={styles.supportInput} />
          <br />
          <a href="">Track account opening</a>
          <a href=""> Track segment activation</a>
          <a href="">Intraday margins</a>
          <br />
          <a href="">Kite user manual</a>
        </div>

        <div className={[styles.inputContainerRight, "pt-4"].join(" ")}>
          <h4 style={{ color: "white" }}>Featured</h4>
          <div style={{paddingLeft: "20px"}}>
            <a href="#" style={{ color: "white", fontSize: "1.1rem", display: "inline-block" }} className="pb-4">
              1.Surveillance measure on scrips - September 2024
            </a> <br/>
            <a href="#" style={{ color: "white", fontSize: "1.1rem" }}>
              2.Rights Entitlements listing in September 2024
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navBar}>
      <div className={styles.container}>
        <a href="#">
          <img src="/public/images/zerodha.png" alt="zerodha" width="130" />
        </a>
        <div>
          <ul className={styles.items}>
            <li>Signup</li>
            <li>About</li>
            <li>Product</li>
            <li>Pricing</li>
            <li>Support</li>
            <li>
              <i class="fa-solid fa-bars"></i>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className={styles.navBar}>
      <div className={styles.container}>
        <Link to={"/"}>
          <img src="/public/images/zerodha.png" alt="zerodha" width="130" />
        </Link>
        <div>
          <ul className={styles.items}>
            <li>Signup</li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/product"}>product</Link></li>
            <li><Link to={"/pricing"}>Pricing</Link></li>
            <li><Link to={"/support"}>support</Link></li>
            <li>
              <i class="fa-solid fa-bars"></i>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

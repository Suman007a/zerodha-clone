import React, {useState} from "react";
import styles from "./Menu.module.css";
import { Link } from "react-router-dom";
import ProfileDropDown from './ProfileDropDown'

export default function Menu() {

  const [selectedMenu, setSelectedMenu] = useState(null);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  }

  const handleDropDownClick = () => {
    setIsDropDownOpen(!isDropDownOpen);
  }

  const activeMenuClass = "menu-selected";
  const menuClass = "menu";
  return (
    <>
    <div className={styles.menuContainer}>
      <img src="../src/assets/images/zerodhakite.png" alt="zerodha-logo" className={styles.logo}/>
      <div className={styles.menus}>
        <ul>
          <li>
            <Link to="/" style={{textDecoration: "none"}} onClick={()=>handleMenuClick(0)}>
              <p className={selectedMenu===0? styles.menuSelected : styles.menu}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link to="/orders" style={{textDecoration: "none"}} onClick={()=>handleMenuClick(1)}>
              <p className={selectedMenu===1? styles.menuSelected : styles.menu}>Orders</p> 
            </Link>
          </li>
          <li>
            <Link to="/holdings" style={{textDecoration: "none"}} onClick={()=>handleMenuClick(2)}>
              <p className={selectedMenu===2? styles.menuSelected : styles.menu}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link to="/positions" style={{textDecoration: "none"}} onClick={()=>handleMenuClick(3)}>
              <p className={selectedMenu===3? styles.menuSelected : styles.menu}>Positions</p>
            </Link>
          </li>
          <li>
            <Link to="/funds" style={{textDecoration: "none"}} onClick={()=>handleMenuClick(4)}>
              <p className={selectedMenu===4? styles.menuSelected : styles.menu}>Funds</p>
            </Link>
          </li>
          <li>
            <Link to="/apps" style={{textDecoration: "none"}} onClick={()=>handleMenuClick(5)}>
              <p className={selectedMenu===5? styles.menuSelected : styles.menu}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr className={styles.hr}/>
        <div className={styles.profile} onClick={handleDropDownClick}>
          <div className={styles.avatar}>ZU</div>
          <p className={styles.username}>USERID</p>
        </div>
      </div>
    </div>
    </>
  );
}


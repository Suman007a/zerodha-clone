import React, { useContext, useState } from "react";
import styles from "./WatchList.module.css";
import { watchlist } from "../data/data.js";
import { Tooltip, Grow} from "@mui/material";
import { BarChartOutlined, MoreHoriz } from "@mui/icons-material";
import {generalContext} from "./GeneralContext.jsx";

export default function WatchList() {
  
  
  return (
    <div className={styles.watchlistContainer}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className={styles.search}
        />
      </div>
      <ul className={styles.items}>
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>
    </div>
  );
}

const WatchListItem = ({ stock }) => {
  const [showWatchListActions, setshowWatchListActions] = useState(false);

  const handleMouseEnter = (e) => {
    setshowWatchListActions(true);
  };

  const handleMouseLeave = (e) => {
    setshowWatchListActions(false);
  };
  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={styles.listItem}
      key={stock.name}
    >
      <div className={styles.item}>
        <p>{stock.name}</p>
        <div>
          <span className={stock.isDown ? styles.down : styles.up}>
            {stock.percent}
          </span>
          {stock.isDown ? (
            <i class="fa-solid fa-chevron-down" style={{ color: "red" }}></i>
          ) : (
            <i class="fa-solid fa-angle-up" style={{ color: "green" }}></i>
          )}
          <span>{stock.price}</span>
        </div>
      </div>
      {showWatchListActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const a = useContext(generalContext);
  
  return (
    <span className={styles.actions} key={uid}>
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className={styles.buy}onClick={()=>a.openBuyWindow(uid, "BUY")}>Buy</button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className={styles.sell} onClick={()=>a.openBuyWindow(uid, "SELL")}>Sell</button>
        </Tooltip>
        <Tooltip
          title="Abalytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className={styles.analytics}>
          <BarChartOutlined className={styles.icon} fontSize="small"/>
          </button>
        </Tooltip>
        <Tooltip
          title="More"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="more">
          <MoreHoriz className={styles.icon} fontSize="small"/>
          </button>
        </Tooltip>
      </span>
    </span>
  );
};


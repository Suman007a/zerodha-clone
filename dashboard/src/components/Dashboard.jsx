import React from "react";
import styles from "./Dashboard.module.css";
import WatchList from "./WatchList";
import Summary from "./Summary";
import { Route, Routes } from "react-router-dom";
import Orders from "./Orders";
import Holdings from "./Holdings";
import Positions from "./Positions";
import Funds from "./Funds";
import Apps from "./Apps";
import GeneralContextProvider from "./GeneralContext";


export default function Dashboard() {
  return (
    <div className={styles.dashboardContainer}>
      <GeneralContextProvider>
      <WatchList />
      </GeneralContextProvider>
      
      <div className={styles.content}>
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route exact path="/orders" element={<Orders />} />
          <Route exact path="/holdings" element={<Holdings />} />
          <Route exact path="/positions" element={<Positions />} />
          <Route exact path="/funds" element={<Funds />} />
          <Route exact path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
}
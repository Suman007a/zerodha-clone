import React, { useState, useEffect } from "react";
import styles from "./Positions.module.css";
import axios from 'axios'
// import { positions } from "../data/data.js";

export default function Positions() {
  const [positions, setPositions] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/allpositions").then((res) => {
      setPositions(res.data);
    });
  });
  return (
    <div className="positions">
      <h2>Positions({positions.length})</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>chg.</th>
          </tr>
        </thead>
        <tbody>
          {positions.map((stock, index) => {
            const curVal = stock.price * stock.qty;
            const isProfit = curVal - stock.avg * stock.qty >= 0.0;
            const profitClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";
            return (
              <tr key={index}>
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty.toFixed(2)}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price}</td>
                <td className={isProfit ? styles.profit : styles.loss}>
                  {(curVal - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td>{stock.net}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

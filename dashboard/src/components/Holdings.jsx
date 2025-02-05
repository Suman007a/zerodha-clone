import React, { useState, useEffect } from "react";
import styles from "./Holdings.module.css";
// import { holdings } from "../data/data.js";
import axios from "axios";
import VerticalGraph from './VerticalGraph'

export default function Holdings() {
  const [holdings, setHoldings] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/allholdings").then((res) => {
      setHoldings(res.data);
    }, []);
  });

  const labels = holdings.map((subArray) => subArray["name"]);
  const data = {
    labels,
    datasets: [ 
      {
        label: "Stock Name",
        data: holdings.map((stock) => stock.price),
        backgroundColor: "rgba(255,99,132,0.5)"
      },
    ],
  };

  return (
    <div className={styles.container}>
      <h2>Holdings({holdings.length})</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
        </thead>
        <tbody>
          {holdings.map((stock, index) => {
            const curVal = stock.price * stock.qty;
            const isProfit = curVal - stock.avg * stock.qty >= 0.0;
            const profitClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";
            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{curVal}</td>
                <td className={isProfit ? styles.profit : styles.loss}>
                  {(curVal - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td>{stock.net}</td>
                <td>{stock.day}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <VerticalGraph data={data}/>
    </div>
  );
}

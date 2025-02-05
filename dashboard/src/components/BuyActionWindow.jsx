import React, { useContext } from "react";
import styles from "./BuyActionWindow.module.css";
import { Link } from "react-router-dom";
import { generalContext } from "./GeneralContext.jsx";
import axios from "axios";

export default function BuyActionWindow({ uid,type }) {
  const a = useContext(generalContext);
  function handleCancelButton() {
    a.closeBuyWindow();
  }
  const [inpQty, setInpQty] = React.useState(1);
  const [inpPrice, setInpPrice] = React.useState(0);
  function handleInpQty(e) {
    setInpQty(e.target.value);
  }
  function handleInpPrice(e) {
    setInpPrice(e.target.value);
  }
  function handleBuyBtn() {
    axios
      .post("http://localhost:8080/newOrder", {
        name: uid,
        qty: inpQty,
        price: inpPrice,
        mode: type,
      })
      .catch((err) => {
        console.log(err);
      });
      a.closeBuyWindow();
  }

  return (
    <div className={styles.container} id="buyWindow" draggable="true">
      <div className={styles.regularOrder}>
        <div className={styles.input}>
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              id="qty"
              className={styles.qty}
              name="qty"
              style={{ width: "100%", border: "none" }}
              onChange={handleInpQty}
              value={inpQty}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              id="price"
              className={styles.price}
              name="price"
              step="0.05"
              style={{ width: "100%", border: "none" }}
              onChange={handleInpPrice}
              value={inpPrice}
            />
          </fieldset>
        </div>
      </div>
      <div className={styles.buttons}>
        <span>Margin Required 339.3</span>
        <div>
          <Link style={{ backgroundColor: type==="BUY"?"#406DEA": "red"}} onClick={handleBuyBtn}>
            {type}
          </Link>
          <Link onClick={handleCancelButton}>Cancel</Link>
        </div>
      </div>
    </div>
  );
}

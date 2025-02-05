import React from "react";
import BuyActionWindow from "./BuyActionWindow";

export const generalContext = React.createContext({
  openBuyWindow: function (uid) {},
  closeBuyWindow: function () {},
});

function GeneralContextProvider({children}) {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = React.useState(false);
  const [selectedStockUid, setSeclectedUid] = React.useState("");
  const [stockType, setStockType] = React.useState(null);

  function handleOpenBuyWindow(uid,type) {
    setIsBuyWindowOpen(true);
    setSeclectedUid(uid);
    setStockType(type);
  }

  function handleCloseBuyWindow() {
    setIsBuyWindowOpen(false);
    setSeclectedUid("");
  }

  return (
    <generalContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
      }}
    >
      {children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUid} type={stockType} />}
    </generalContext.Provider>
  );
}

export default GeneralContextProvider;

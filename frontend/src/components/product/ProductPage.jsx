import React from "react";
import Hero from "./Hero";
import Kite from "./Kite";
import Console from "./Console";
import Coin from "./Coin";
import KiteConnectApi from "./KiteConnectApi";
import VarsityMobile from "./VarsityMobile";
import ZerodhaUniverse from "./ZerodhaUniverse";

export default function ProductPage() {
  return (
    <>
      <Hero />
      <Kite />
      <Console />
      <Coin />
      <KiteConnectApi />
      <VarsityMobile />
      <ZerodhaUniverse />
    </>
  );
}

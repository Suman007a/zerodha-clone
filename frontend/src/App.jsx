import { useState } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/landing/LandingPage";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Outlet id="details" />
      <Footer />
    </>
  );
}

export default App;

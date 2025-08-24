import React, { useEffect } from "react";
import "./Main.css";
import About from "../../components/About/About";
import Mission from "../Mission/Mission";

function Main() {
  return (
    <section className="main">
      <About />
      <Mission />
    </section>
  );
}

export default Main;

import React, { useEffect } from "react";
import "./Main.css";
import About from "../../components/About/About";
import WelcomeSection from "../WelcomeSection/WelcomeSection";

function Main() {
  return (
    <section className="main">
      <WelcomeSection />
      <About />
    </section>
  );
}

export default Main;

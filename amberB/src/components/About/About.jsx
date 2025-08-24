import React from "react";
import "./About.css";
import AboutCards from "../AboutCards/AboutCards";
import SlideShow from "../SlideShow/SlideShow";
import logo1 from "../../assets/title_array/logo1.png";
import logo2 from "../../assets/title_array/logo2.png";
import logo3 from "../../assets/title_array/logo3.png";

function About() {
  const flowerArray = [logo1, logo2, logo3];

  return (
    <section className="about">
      <div className="about__content">
        <SlideShow images={flowerArray} />
        <AboutCards />
      </div>
    </section>
  );
}

export default About;

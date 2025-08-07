import React from "react";
import "./About.css";
import AboutCards from "../AboutCards/AboutCards";

function About() {
  return (
    <section className="about">
      <div className="about__content">
        <AboutCards />
      </div>
    </section>
  );
}

export default About;

/*<iframe
          className="about__video"
          width="900px"
          height="500px"
          src="https://www.youtube.com/embed/23f3Q4Aw_aw?si=lBilKpby9kxweTam"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>*/

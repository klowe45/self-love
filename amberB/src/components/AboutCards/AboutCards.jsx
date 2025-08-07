import "./AboutCards.css";
import React from "react";
import whiteShirtBj1 from "../../assets/amber_photos/whiteshirtbj1.jpeg";
import whiteShirtBj2 from "../../assets/amber_photos/whiteshirtbj2.jpeg";
import whiteShirtBj3 from "../../assets/amber_photos/whiteshirtbj3.jpeg";
import bgFlower1 from "../../assets/flower_array/flower_array1.png";
import bgFlower2 from "../../assets/flower_array/flower_array2.png";

function AboutCards() {
  return (
    <div className="about__cards">
      <div className="about__cards_left">
        <div className="about__card">
          <img
            src={bgFlower1}
            alt="amber smiling while sitting on a window ledge"
            className="about__card-img"
          />
          <h3 className="about__card-text">
            Teacher: serving in education for 11 years, now as a Dean of
            Students teaching kids w. Self Love, accountability, self awareness,
            and leadership.
          </h3>
        </div>

        <div className="about__card">
          <img
            src={whiteShirtBj2}
            alt="amber laying on stomach with feet crossed holding a crystal"
            className="about__card-img"
          />
          <h3 className="about__card-text">
            Childhood Trauma Victor: raised by a single mother who was addicted
            to meth. Healed: from a deeply sad, insecure, competitive, lost soul
            to a confident, full of light, Queen.
          </h3>
        </div>
      </div>

      <div className="about__cards_right">
        <div className="about__card">
          <img
            src={whiteShirtBj3}
            alt="amber standing while smiling and holding self love business card next to face"
            className="about__card-img"
          />
          <h3 className="about__card-text">Damn im so fucking sexy</h3>
        </div>

        <div className="about__card">
          <img
            src={bgFlower2}
            alt="self love with pink flowers"
            className="about__card-img"
          />
          <h3 className="about__card-text">
            Divorced: and healthily co-parent = blessed.
          </h3>
        </div>

        <div className="about__card">
          <img
            src={whiteShirtBj1}
            alt="self love with white flower"
            className="about__card-img"
          />
          <h3 className="about__card-text">
            Educated = Educational Leadership, M. Ed + Education, BA +
            Accounting, BBA, Teacher: here to teach w.Self Love skills, tools,
            and strategies so you can live your best life.
          </h3>
        </div>
      </div>
    </div>
  );
}
export default AboutCards;

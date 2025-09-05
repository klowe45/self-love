import "./WelcomeSection.css";
import SlideShow from "../SlideShow/SlideShow";
import logo1 from "../../assets/title_array/logo1.png";
import logo2 from "../../assets/title_array/logo2.png";
import logo3 from "../../assets/title_array/logo3.png";

function WelcomeSection() {
  const flowerArray = [logo1, logo2, logo3];
  return (
    <section className="welcome">
      <div className="welcome__logo">
        <SlideShow images={flowerArray} />
      </div>
      <div className="welcome__container">
        <div className="welcome__title">
          Welcome to Your Journey of Self-Love & Empowerment
        </div>
        <div className="welcome__description">
          I'm here to guide you on a transformative path toward loving yourself
          completely, embracing your authentic self, and manifesting the life
          you truly deserve.
        </div>
        <button className="welcome__button">Start Your Journey</button>
      </div>
    </section>
  );
}

export default WelcomeSection;

import React from "react";
import SlideShow from "../SlideShow/SlideShow";
import logo1 from "../../assets/title_array/logo1.png";
import logo2 from "../../assets/title_array/logo2.png";
import logo3 from "../../assets/title_array/logo3.png";
import "./Main.css";
import About from "../../components/About/About";
import Mission from "../../components/Mission/Mission";

function Main() {
  const flowerArray = [logo1, logo2, logo3];

  return (
    <section className="main">
      <div className="main__background">
        Resilient · Compassionate · Bright · Passionate · Innovative · Happy ·
        Supportive · Playful · Radiant · Fabulous · Grounded · Magnetic ·
        Patient · Peaceful · Kind-hearted · Trustworthy · Focused · Harmonious ·
        Grateful · Cheerful · Confident · Adventurous · Graceful · Dependable ·
        Bubbly · Authentic · Blissful · Optimistic · Honorable · Ecstatic ·
        Empowered · Generous · Unstoppable · Warm-hearted · Exuberant · Curious
        · Joyful · Daring · Welcoming · Loyal · Blameless · Strong · Humorous ·
        Majestic · Encouraging · Attentive · Enthusiastic · Nurturing · Free ·
        Fearless · Limitless · Innovative · Happy · Respectful · Sincere ·
        Gleeful · Comfortable · Able · Delighted · Inspiring · Wonderful ·
        Sympathetic · Amazing · Flexible · Patient · Confident · Affectionate ·
        Gracious · Tender · Enlightened · Thriving · Smiling · Influential ·
        Buoyant · Humble · Exquisite · Dynamic · Forgiving · Considerate ·
        Captivating · Charming · Tranquil · Content · Positive · Insightful ·
        Mindful · Thriving · Attractive · Compassionate · Balanced · Agile ·
        Rejoicing · Uplifted · Driven · Persistent · Encouraging · Warm ·
        Cheerful · Exuberant · Joyful · Fascinating · Resourceful · Humble ·
        Faithful · Generous · Adventurous · Respectful · Limitless · Ambitious ·
        Enthusiastic · Glorious · Reliable · Flexible · Strong · Divine ·
        Cooperative · Jubilant · Hopeful · Affectionate · Powerful · Empathetic
        · Daring · Stunning · Approachable · Benevolent · Innovative · Visionary
        · Creative · Determined · Understanding · Courageous · Smiling · Loving
        · Grateful · Charmed · Fierce · Motivated · Devoted · Optimistic ·
        Enthusiastic · Amazing · Altruistic · Blissful · Uplifted ·
        Compassionate · Courageous · Serene · Forgiving · Majestic · Lovely ·
        Authentic · Rejoicing · Gracious · Genuine · Confident · Supportive ·
        Delightful · Cheerful · Groundbreaking · Brave · Inspired · Ecstatic ·
        Light · Radiant · Empowered · Admirable · Flexible · Buoyant · Gleeful ·
        Ambitious · Adaptable · Ecstatic · Exuberant · Grateful · Cheerful ·
        Friendly · Positive · Content · Considerate · Magnetic · Happy ·
        Accomplished · Attentive · Independent · Understanding · Imaginative ·
        Resilient · Exquisite · Ethical · Courageous · Powerful · Playful ·
        Beautiful · Compassionate · Tender · Animated · Generous · Nurturing ·
        Respectful · Diligent · Dynamic · Patient · Calm · Cooperative ·
        Peaceful · Lighthearted · Innovative · Determined · Charming · Healing ·
        Caring · Creative · Honest · Enthusiastic · Adventurous · Honorable ·
        Trustworthy · Joyful · Amazing · Productive · Elegant · Able ·
        Influential · Insightful · Optimistic · Blissful · Humorous ·
        Compassionate · Exuberant · Genuine · Resourceful · Balanced · Tenacious
        · Caring · Loyal · Gorgeous · Happy · Focused · Smiling · Exquisite ·
        Grateful · Thriving · Serene · Brilliant · Fearless · Warm · Charmed ·
        Driven · Glorious · Patient · Sincere · Altruistic · Gracious ·
        Supportive · Friendly · Adventurous · Faithful · Grounded · Positive ·
        Comforting · Radiant · Strong · Joyful · Amazing · Encouraging ·
        Creative · Gentle · Ecstatic · Enlightened · Hopeful · Forgiving ·
        Resilient · Empowered · Attractive · Exuberant · Understanding · Bold ·
        Grateful · Optimistic · Compassionate · Content · Exuberant · Noble ·
        Delighted · Energetic · Healing · Influential · Happy · Peaceful ·
        Genuine · Kind · Innovative · Affectionate · Adventurous · Uplifted ·
        Lovely · Amazing · Respectful · Generous · Courageous · Charming ·
        Hopeful · Patient · Grounded · Ecstatic · Exuberant · Grateful ·
        Cheerful · Friendly · Positive · Content · Considerate · Magnetic ·
        Happy · Accomplished · Attentive · Independent · Understanding ·
        Imaginative · Resilient · Exquisite · Ethical · Courageous · Powerful ·
        Playful · Beautiful · Compassionate · Tender · Animated · Generous ·
        Nurturing · Respectful · Diligent · Dynamic · Patient · Calm ·
        Cooperative · Peaceful · Lighthearted · Innovative · Determined ·
        Charming · Healing · Caring · Creative · Honest · Enthusiastic ·
        Adventurous · Honorable · Trustworthy · Joyful · Amazing · Productive ·
        Elegant · Able · Influential · Insightful · Optimistic · Blissful ·
        Humorous · Compassionate · Exuberant · Genuine · Resourceful · Balanced
        · Tenacious · Caring · Loyal · Gorgeous · Happy · Focused · Smiling ·
        Exquisite · Grateful · Thriving · Serene · Brilliant · Fearless · Warm ·
        Charmed · Driven · Glorious · Patient · Sincere · Altruistic · Gracious
        · Supportive · Friendly · Adventurous · Faithful · Grounded · Positive ·
        Comforting · Radiant · Strong · Joyful · Amazing · Encouraging ·
        Creative · Gentle · Ecstatic · Enlightened · Hopeful · Forgiving ·
        Resilient · Empowered · Attractive · Exuberant · Understanding · Bold ·
        Grateful · Optimistic · Compassionate · Content · Exuberant · Noble ·
        Delighted · Energetic · Healing · Influential · Happy · Peaceful ·
        Genuine · Kind · Innovative · Affectionate · Adventurous · Uplifted ·
        Lovely · Amazing · Respectful · Generous · Courageous · Charming ·
        Hopeful · Patient · Grounded · Dynamic · Forgiving · Considerate ·
        Captivating · Charming · Tranquil · Content · Positive · Insightful ·
        Mindful · Thriving · Attractive · Compassionate · Balanced · Agile ·
        Rejoicing · Uplifted · Driven · Persistent · Encouraging · Warm ·
        Cheerful · Exuberant · Joyful · Fascinating · Resourceful · Humble ·
        Faithful · Generous · Adventurous · Respectful · Limitless · Ambitious ·
        Enthusiastic · Glorious · Reliable · Flexible · Strong · Divine ·
        Cooperative · Jubilant · Hopeful · Affectionate · Powerful · Empathetic
        · Daring · Stunning · Approachable · Benevolent · Innovative · Visionary
        · Creative · Determined · Understanding · Courageous · Smiling · Loving
        · Grateful · Charmed · Fierce · Motivated · Devoted · Optimistic ·
        Enthusiastic · Amazing · Altruistic · Blissful · Uplifted ·
        Compassionate · Courageous · Serene · Forgiving · Majestic · Lovely ·
        Authentic · Rejoicing · Gracious · Genuine · Confident · Supportive ·
        Delightful · Cheerful · Groundbreaking · Brave · Inspired · Ecstatic ·
        Light · Radiant · Empowered · Admirable · Flexible · Buoyant · Gleeful ·
        Ambitious · Adaptable · Ecstatic · Exuberant · Grateful · Cheerful ·
        Friendly · Positive · Content · Considerate · Magnetic · Happy ·
        Accomplished · Attentive · Independent · Understanding · Imaginative ·
        Resilient · Exquisite · Ethical · Courageous · Powerful · Playful ·
        Beautiful · Compassionate · Tender · Animated · Generous · Nurturing ·
        Respectful · Diligent · Dynamic · Patient · Calm · Cooperative ·
        Peaceful · Lighthearted · Innovative · Determined · Charming · Healing ·
        Caring · Creative · Honest · Enthusiastic · Adventurous · Honorable ·
        Trustworthy · Joyful · Amazing · Productive · Elegant · Able ·
        Influential · Insightful · Optimistic · Blissful · Humorous ·
        Compassionate · Exuberant · Genuine · Resourceful · Balanced · Tenacious
        · Caring · Loyal · Gorgeous · Happy · Focused · Smiling · Exquisite ·
        Grateful · Thriving · Serene · Brilliant · Fearless · Warm · Charmed ·
        Driven · Glorious · Patient · Sincere · Altruistic · Gracious ·
        Supportive · Friendly · Adventurous · Faithful · Grounded · Positive ·
        Comforting · Radiant · Strong · Joyful· Kind · Innovative · Affectionate
        · Adventurous · Uplifted · Lovely · Amazing · Respectful · Generous ·
        Courageous · Charming · Hopeful · Patient · Grounded · Ecstatic ·
        Exuberant · Grateful · Cheerful · Friendly · Positive · Content ·
        Considerate · Magnetic · Happy · Accomplished · Attentive · Independent
        · Understanding · Imaginative · Resilient · Exquisite · Ethical ·
        Courageous · Powerful · Playful · Beautiful · Compassionate · Tender ·
        Animated · Generous · Nurturing · Respectful · Diligent · Dynamic ·
        Patient · Calm · Cooperative · Peaceful · Lighthearted · Innovative ·
        Determined · Charming · Healing · Caring · Creative · Honest ·
        Enthusiastic · Adventurous · Honorable · Trustworthy · Joyful · Amazing
        · Productive · Elegant · Able · Influential · Insightful · Optimistic ·
        Blissful · Humorous · Compassionate · Exuberant · Genuine · Resourceful
        · Balanced · Tenacious · Caring · Loyal · Gorgeous · Happy · Focused ·
        Smiling · Exquisite · Grateful · Thriving · Serene · Brilliant ·
        Fearless · Warm · Charmed · Driven · Glorious · Patient · Sincere ·
        Altruistic · Gracious · Supportive · Friendly · Adventurous · Faithful ·
        Grounded · Positive · Comforting · Radiant · Strong · Joyful · Amazing ·
        Encouraging · Creative · Gentle · Ecstatic · Enlightened · Hopeful ·
        Forgiving · Resilient · Empowered · Attractive · Exuberant ·
        Understanding · Bold · Grateful · Optimistic · Compassionate · Content ·
        Exuberant · Noble · Delighted · Energetic · Healing · Influential
      </div>
      <SlideShow images={flowerArray} />
      <About />
      <Mission />
    </section>
  );
}

export default Main;

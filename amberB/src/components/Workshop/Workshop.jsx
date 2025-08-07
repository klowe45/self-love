import React from "react";
import "./Workshop.css";
import workshopImg from "../../assets/workshop.jpg";

function Workshop() {
  return (
    <section className="workshop">
      <div className="workshop__container">
        <h1 className="workshop__title">Workplace Workshops</h1>
        <div className="workshop__content">
          <img className="workshop__img" src={workshopImg} alt="Water Lily" />
          <h3 className="workshop__info">
            Your employees are your greatest asset. When employees feel valued,
            supported, and confident in themselves, they bring their best selves
            to work, fueling a culture of positivity, collaboration, and
            success. Utilizing my 10+ years in education and leadership, we will
            customized a Self Love Workplace Workshop based off your
            organization goals and needs. Through interactive and personalized
            sessions, I guide teams on a journey of self-discovery, learning a
            variety of tools to implement positive change within themselves,
            ultimately impacting your business culture. ​ When your employees
            shine bright, your business does too. Let’s create a workplace where
            confidence, positivity, collaboration and success go hand in hand.{" "}
          </h3>
        </div>
        <div className="workshop__details">
          <div className="workshop__details-group">
            <div className="workshop__details-group-title">Workshop Themes</div>
            <div className="workshop__details-group-body">
              <p>Let’s learn how to…</p>
              <p>Discover what you Love and DO IT</p>
              <p>Have Critical Conversations</p>
              <p>Be Vulnerable</p>
              <p>Get out of your Comfort Zone</p>
              <p>Be PROUD of yourself</p>
              <p>Say No</p>
              <p>
                Positive Affirmations: speak, feel, and know loving words to
                yourself
              </p>
              <p>Live a Life Full of Gratitude</p>
              <p>Set Boundaries and Respect them</p>
              <p>
                Feel, Name, and Healthily Flow out of your Feelings - letting go
              </p>
              <p>Take Care of our Mind</p>
              <p>Taking Care of your Body</p>
              <p>Find Balance in your Life</p>
              <p>Reflect on Life</p>
              <p>Forgive and Accept</p>
              <p>Let Go of Expectations</p>
              <p>Turn your Negative Thoughts into Positive Ones</p>
              <p>Surround Yourself in a Positive Environment</p>
              <p>Connecting with Nature</p>
              <p>Romanticize Your Life</p>
              <p>Set Personal Goals</p>
              <p>Dress to Feel Your Best</p>
              <p>Do Monthly Cleanses and the Benefits of Them</p>
              <p>Live Authentically</p>
              <p>Treat Yourself</p>
              <p>Take Care of your Spiritual Self</p>
              <p>Show Love to YOUR younger self - an inner child connection</p>
            </div>
          </div>
          <div className="workshop__details-group">
            <div className="workshop__details-group-title">What to Expect</div>
            <div className="workshop__details-group-body">
              Let’s connect to understand your business strengths and areas of
              growth. Using my 10+ years of educator experience, a specially
              designed workshop will be created to meet the needs of your team.
              You can expect a learning target, modeling, practice, time for
              reflection, collaboration, intention setting and tools to be able
              to incorporate in your daily lives. Lessons may include movement,
              breath work, meditations, journaling, sound healing, and other
              creative practices. Services include: A collaborative meeting,
              identifying your vision and your goals. Personalized workshops
              aligning your goals with your vision. An hour and fifteen minutes
              of instructional time. Applicable tools and resources to use in
              all of your daily lives. End-of-workshop question and answering
              session. Accountability follow-ups. Additional educational
              resources. Let’s connect at amberbroihier@gmail.com Text/call @
              (920) 445-5127
            </div>
          </div>
          <div className="workshop__details-group">
            <div className="workshop__details-group-title">
              Workshop Pricing
            </div>
            <div className="workshop__details-group-body">
              <span className="workshop__details-group-span">
                90 Min Workshop: $750 (up to 25 students)
              </span>
              <span className="workshop__details-group-span">
                Half-Day Workshop (3 hours): $1300 (up to 25 students)
              </span>
              <span className="workshop__details-group-span">
                Full-Day Workshop (6 hours): $2700 (up to 25 students)
              </span>
              <span className="workshop__details-group-span">
                Additional students: $35 per person{" "}
              </span>

              <span className="workshop__details-group-span">
                Multi-Workshop Discounts: 5% off when booking 3+ sessions in
                advance. Groups over 50 students: custom quote available
              </span>
            </div>
          </div>
        </div>
        <div className="workshop__details-inquiries">
          <div className="workshop__details-inquiries-title">Inquiries</div>
          <div className="workshop__details-inquiriesbody">
            amberbroihier@gmail.com (920) 445-5127
          </div>
        </div>
      </div>
    </section>
  );
}

export default Workshop;

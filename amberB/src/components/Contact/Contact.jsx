import "./Contact.css";
import React from "react";
import phoneImg from "../../assets/phone-icon.png";

function Contact() {
  const handleInstagramClick = () => {
    try {
      const newWindow = window.open(
        "https://www.instagram.com/amber_broihier/",
        "_blank"
      );
      if (!newWindow || typeof newWindow.close === "undefined") {
        throw new Error("Popup blocked or failed to open new window");
      }
    } catch (err) {
      console.error("Failed to open Instagram", err);
      alert("Unable to open Instagram");
    }
  };

  return (
    <div className="contact" id="contact">
      <h2 className="contact__title">Follow Me</h2>
      <div className="contact__container">
        <div className="contact__social-instagram">
          <button
            className="contact__social-btn"
            type="button"
            onClick={handleInstagramClick}
          ></button>
          <div className="contact__social-instagram-text">
            <p className="contact__social-text">@amber_broihier</p>
            <p className="contact__social-text">
              Follow my journey on Instagram
            </p>
          </div>
        </div>
        <div className="contact__social-phone">
          <img
            src={phoneImg}
            alt="Image of phone"
            className="contact__social-phone-img"
          />
          <div className="contact__social-phone-text">
            <p className="contact__social-text">PH: (920) 999-9999</p>
            <p className="contact__social-text">
              Ready to start your transformation?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

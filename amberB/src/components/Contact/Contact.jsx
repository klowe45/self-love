import "./Contact.css";
import React from "react";
import instagramLogo from "../../assets/IG-icon.png";

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
    <div className="contact">
      <div className="contact__container">
        <h2 className="contact__followMe">Follow Me</h2>
        <div className="contact__socials">
          <div className="contact__socials_content">
            <button
              className="contact__social"
              type="button"
              onClick={handleInstagramClick}
            ></button>
            <p className="contact__social-text">@amber_broihier</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

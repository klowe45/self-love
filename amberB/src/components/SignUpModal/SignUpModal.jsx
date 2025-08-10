import { React, useState, useEffect, act } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function SignUpModal({ activeModal, closeModal, handleSignInModal }) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [mailingAddress, setMailingAddress] = useState("");

  return (
    <ModalWithForm
      activeModal={activeModal}
      closeModal={closeModal}
      isOpen={activeModal === "signup"}
      buttonText={"Sign Up"}
      buttonText2={"Sign In"}
      toggleButton={handleSignInModal}
      titleText={"Sign Up"}
    >
      <label htmlFor="first name" className="modal__label">
        First Name:{""}
        <input
          type="text"
          className="modal__input"
          id="firstname-signup"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
      </label>
      <label htmlFor="last name" className="modal__label">
        Last Name:{""}
        <input
          type="text"
          className="modal__input"
          id="lastname-signup"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
      </label>
      <label htmlFor="email-signup" className="modal__label">
        Email:{""}
        <input
          type="email"
          id="email-signup"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="modal__input"
        ></input>
      </label>
      <label htmlFor="password" className="modal__label">
        Password:{""}
        <input
          type="password"
          id="password-signup"
          className="modal__input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </label>
      <label htmlFor="phone number" className="modal__label">
        Phone Number:{""}
        <input
          type="tel"
          id="phone-number"
          className="modal__input"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        ></input>
      </label>
      <label htmlFor="mailing address" className="modal__label">
        Mailing Address:{""}
        <input
          type="string"
          id="mailing-address-signup"
          className="modal__input"
          placeholder="Mailing Address"
          value={mailingAddress}
          onChange={(e) => setMailingAddress(e.target.value)}
        ></input>
      </label>
    </ModalWithForm>
  );
}

export default SignUpModal;

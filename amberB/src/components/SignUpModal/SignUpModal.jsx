import { React, useState, useEffect, act } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function SignUpModal({ activeModal, closeModal }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ModalWithForm
      activeModal={activeModal}
      closeModal={closeModal}
      isOpen={activeModal === "signup"}
    >
      <label htmlFor="email-signup" className="modal__label">
        Email{""}
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
        Password{""}
        <input
          type="password"
          id="password-signup"
          className="modal__input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </label>
      <label htmlFor="username" className="modal__label">
        Username{""}
        <input
          type="text"
          className="modal__input"
          id="username-signup"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
      </label>
    </ModalWithForm>
  );
}

export default SignUpModal;

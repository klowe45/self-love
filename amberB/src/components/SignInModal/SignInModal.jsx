import { React, useState, useEffect, act } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function SignInModal({ activeModal, closeModal, handleSignUpModal }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ModalWithForm
      activeModal={activeModal}
      closeModal={closeModal}
      isOpen={activeModal === "signin"}
      titleText={"Sign In"}
      buttonText={"Sign In"}
      buttonText2={"Sign Up"}
      toggleButton={handleSignUpModal}
    >
      <label htmlFor="username" className="modal__label">
        Name:{""}
        <input
          type="text"
          className="modal__input"
          id="name-signup"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
      </label>
      <label htmlFor="password" className="modal__label">
        Password:{""}
        <input
          type="password"
          id="password-signIn"
          className="modal__input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </label>
    </ModalWithForm>
  );
}

export default SignInModal;

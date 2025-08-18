import { React, useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function SignInModal({
  activeModal,
  closeModal,
  handleSignUpModal,
  handleSignInSubmit,
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    handleSignInSubmit({
      email,
      password,
    });
  };

  return (
    <ModalWithForm
      activeModal={activeModal}
      closeModal={closeModal}
      isOpen={activeModal === "signin"}
      titleText={"Sign In"}
      buttonText={"Sign In"}
      buttonText2={"Sign Up"}
      toggleButton={handleSignUpModal}
      onSubmit={onSubmit}
    >
      <label htmlFor="name-signin" className="modal__label">
        Name:{""}
        <input
          type="text"
          className="modal__input"
          id="name-signin"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
      </label>
      <label htmlFor="password-signin" className="modal__label">
        Password:{""}
        <input
          type="password"
          id="password-signin"
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

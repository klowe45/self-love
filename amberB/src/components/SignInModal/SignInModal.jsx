import { React, useState, useEffect, useActionState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function SignInModal({
  activeModal,
  closeModal,
  handleSignUpModal,
  handleSignInSubmit,
}) {
  const initial = { success: false, error: null };

  async function logUserIn(prevState, formData) {
    try {
      const payload = {
        email: formData.get("email"),
        password: formData.get("password"),
      };
      await handleSignInSubmit(payload);
      return { success: true, error: null };
    } catch (err) {
      return { success: false, error: err?.message || "Sign in Failed" };
    }
  }

  const [data, formAction, isPending] = useActionState(logUserIn, initial);

  return (
    <ModalWithForm
      activeModal={activeModal}
      closeModal={closeModal}
      isOpen={activeModal === "signin"}
      titleText={"Sign In"}
      buttonText={"Sign In"}
      buttonText2={"Sign Up"}
      toggleButton={handleSignUpModal}
      formAction={formAction}
      isPending={isPending}
      data={data}
    >
      <label htmlFor="name-signin" className="modal__label">
        Email:{""}
        <input
          type="email"
          className="modal__input"
          id="name-signin"
          placeholder="Email"
          name="email"
        ></input>
      </label>
      <label htmlFor="password-signin" className="modal__label">
        Password:{""}
        <input
          type="password"
          id="password-signin"
          className="modal__input"
          placeholder="Password"
          name="password"
        ></input>
      </label>
    </ModalWithForm>
  );
}

export default SignInModal;

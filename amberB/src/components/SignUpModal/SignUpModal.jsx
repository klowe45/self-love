import React, { useState, useActionState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function SignUpModal({
  activeModal,
  closeModal,
  handleSignInModal,
  handleSignUpSubmit,
}) {
  /*const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [mailingAddress, setMailingAddress] = useState("");*/

  const initial = { success: false, error: null };

  async function saveUser(prevState, formData) {
    try {
      const payload = {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        password: formData.get("password"),
        phoneNumber: formData.get("phoneNumber"),
        mailingAddress: formData.get("mailingAddress"),
      };
      await handleSignUpSubmit(payload);

      return { success: true, error: null };
    } catch (err) {
      return { success: false, error: err?.message || "Sign Up Failed" };
    }
  }

  const [data, formAction, isPending] = useActionState(saveUser, initial);

  return (
    <ModalWithForm
      activeModal={activeModal}
      closeModal={closeModal}
      isOpen={activeModal === "signup"}
      buttonText={"Sign Up"}
      buttonText2={"Sign In"}
      toggleButton={handleSignInModal}
      titleText={"Sign Up"}
      formAction={formAction}
      isPending={isPending}
      data={data}
    >
      <label htmlFor="firstname-signup" className="modal__label">
        First Name:{""}
        <input
          type="text"
          className="modal__input"
          id="firstname-signup"
          placeholder="First Name"
          name="firstName"
        ></input>
      </label>
      <label htmlFor="lastname-signup" className="modal__label">
        Last Name:{""}
        <input
          type="text"
          className="modal__input"
          id="lastname-signup"
          placeholder="Last Name"
          name="lastName"
        ></input>
      </label>
      <label htmlFor="email-signup" className="modal__label">
        Email:{""}
        <input
          type="email"
          id="email-signup"
          placeholder="Email"
          name="email"
          className="modal__input"
        ></input>
      </label>
      <label htmlFor="password-signup" className="modal__label">
        Password:{""}
        <input
          type="password"
          id="password-signup"
          className="modal__input"
          placeholder="Password"
          name="password"
        ></input>
      </label>
      <label htmlFor="phone-number-signup" className="modal__label">
        Phone Number:{""}
        <input
          type="tel"
          id="phone-number-signup"
          className="modal__input"
          placeholder="Phone Number"
          name="phoneNumber"
        ></input>
      </label>
      <label htmlFor="mailing-address-signup" className="modal__label">
        Mailing Address:{""}
        <input
          type="text"
          id="mailing-address-signup"
          className="modal__input"
          placeholder="Mailing Address"
          name="mailingAddress"
        ></input>
      </label>

      {data.error && <p className="modal__error">{data.error}</p>}
      {data.error && <p className="modal__success">{"Account Created!"}</p>}
    </ModalWithForm>
  );
}

export default SignUpModal;

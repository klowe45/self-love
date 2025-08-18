import "./ModalWithForm.css";

function ModalWithForm({
  children,
  closeModal,
  titleText,
  onSubmit,
  buttonText,
  buttonText2,
  isOpen,
  toggleButton,
  formAction,
  isPending,
}) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content">
        <button
          className="modal__close"
          onClick={closeModal}
          type="button"
        ></button>
        <form onSubmit={onSubmit} className="modal__form" action={formAction}>
          <h2 className="modal__title">{titleText}</h2>
          {children}
          <button type="submit" className="modal__submit" disabled={isPending}>
            {buttonText}
          </button>
          <button
            type="button"
            className="modal__submit"
            onClick={toggleButton}
          >
            {buttonText2}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;

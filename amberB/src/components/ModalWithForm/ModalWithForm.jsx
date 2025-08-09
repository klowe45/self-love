import "./ModalWithForm.css";

function ModalWithForm({
  children,
  closeModal,
  titleText,
  onSubmit,
  buttonText,
  buttonText2,
  isOpen,
}) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content">
        <button
          className="modal__close"
          onClick={closeModal}
          type="button"
        ></button>
        <form onSubmit={onSubmit} className="modal__form">
          <h2 className="modal__title">{titleText}</h2>
          {children}
          <button type="button" className="modal__submit">
            {buttonText}
          </button>
          <button type="button" className="modal__submit">
            {buttonText2}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;

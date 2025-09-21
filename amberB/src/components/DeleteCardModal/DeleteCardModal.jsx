import ModalWithForm from "../ModalWithForm/ModalWithForm";

function DeleteCardModal({ activeModal, closeModal }) {
  return (
    <ModalWithForm
      activeModal={activeModal}
      closeModal={closeModal}
      isOpen={activeModal === "deleteCard"}
      titleText={"Delete Card"}
      buttonText={"Delete Card"}
      buttonText2Hidden={true}
    ></ModalWithForm>
  );
}

export default DeleteCardModal;

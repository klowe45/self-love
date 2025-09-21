import { useActionState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function EditServiceCardModal({
  activeModal,
  closeModal,
  updateServiceCardSubmit,
}) {
  const initial = { success: false, error: null };

  async function editServiceCard(prevState, formData) {
    try {
      const payload = {
        serviceTitle: formData.get("serviceTitle"),
        subtitle: formData.get("subtitle"),
        price: formData.get("price"),
        description: formData.get("description"),
      };
      await updateServiceCardSubmit(payload);
      console.log(payload);
      return { success: true, error: null };
    } catch (err) {
      return { success: false, error: err?.message || "Edit update failed" };
    }
  }

  const [data, formAction, isPending] = useActionState(
    editServiceCard,
    initial
  );

  return (
    <ModalWithForm
      closeModal={closeModal}
      isOpen={activeModal === "editServiceCard"}
      titleText={"Edit Service"}
      buttonText={"Submit changes"}
      buttonText2Hidden={true}
    >
      <label htmlFor="service-title" className="modal__label">
        Service Title
        <input
          id="service-title"
          type="text"
          className="modal__input"
          placeholder="Service Title"
          name="serviceTitle"
        />
      </label>
      <label htmlFor="subtitle" className="modal__label">
        Subtitle
        <input
          id="subtitle"
          type="text"
          className="modal__input"
          placeholder="Subtitle"
          name="subtitle"
        />
      </label>
      <label htmlFor="price" className="modal__label">
        price
        <input
          id="price"
          type="text"
          className="modal__input"
          placeholder="--"
          name="price"
        />
      </label>
      <label htmlFor="description" className="modal__label">
        Description
        <input
          id="description"
          type="text"
          className="modal__input"
          placeholder="Enter description"
          name="description"
        />
      </label>
    </ModalWithForm>
  );
}

export default EditServiceCardModal;

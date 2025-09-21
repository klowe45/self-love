import "./ServiceCard.css";
import { useLocation } from "react-router-dom";
import defaultFlower from "../../assets/flower_array/flower_array1.png";
import { BASE } from "../utils/auth";

function ServiceCard({ service, deleteCardModal, editCardModal }) {
  //react var
  const location = useLocation();
  //data var
  const serviceTitle = service?.serviceTitle || "Title";
  const subtitle = service?.subtitle || "Subtitle (Optional)";
  const price = service?.price || "00";
  const description = service?.description || "Description will go here..";
  const imageUrl = service?.imageUrl?.url || defaultFlower;

  const raw = service?.imageUrl?.url;
  const imageSrc = raw
    ? raw.startsWith("http")
      ? raw
      : `${BASE}${raw}`
    : defaultFlower;

  //delete modal
  const handleDeleteClick = () => {
    deleteCardModal();
  };

  //edit modal

  const id = service?._id || serivce?.id;

  const handleEditClick = () => {
    editCardModal();
  };

  return (
    <div className="service__card">
      {location.pathname === "/filteredServices" && (
        <>
          <button
            className="service__card-edit"
            button="button"
            onClick={handleEditClick}
          >
            Edit
          </button>

          <button
            type="button"
            className="service__card-delete"
            onClick={handleDeleteClick}
          ></button>
        </>
      )}
      <div className="service__card-img-container">
        <img className="service__card-img" src={imageSrc} alt="flower" />
      </div>
      <h3 className="service__card-title">{serviceTitle}</h3>
      <p className="service__card-subtitle">{subtitle}</p>
      <p className="service__card-description">{description}</p>
      <div className="service__card-price-booknow-container">
        <p className="service__card-price">${price}</p>
        <button className="service__card-booknow">Book Now</button>
      </div>
    </div>
  );
}

export default ServiceCard;

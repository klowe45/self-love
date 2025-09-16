import "./ServiceCard.css";
import defaultFlower from "../../assets/flower_array/flower_array1.png";
import { BASE } from "../utils/auth";

function ServiceCard({ service }) {
  const serviceTitle = service?.serviceTitle || "Title";
  const subtitle = service?.subtitle || "Subtitle (Optional)";
  const price = service?.price || "00";
  const description = service?.description || "Description will go here..";
  const imageUrl = service?.imageUrl.url || defaultFlower;

  const raw = service?.imageUrl.url;
  const imageSrc = raw
    ? raw.startsWith("http")
      ? raw
      : `${BASE}${raw}`
    : defaultFlower;

  return (
    <div className="service__card">
      <div className="serivce__card-block">
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
    </div>
  );
}

export default ServiceCard;

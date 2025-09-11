import "./ServiceCard.css";
import defaultFlower from "../../assets/flower_array/flower_array1.png";

const DEFAULT_STATE = {
  serviceTitle: "Title",
  subtitle: "Subtitle (Optional)",
  price: "$00",
  description: "Description will go here..",
  image: defaultFlower,
};

function ServiceCard() {
  return (
    <div className="service__card">
      <div className="serivce__card-block">
        <div className="service__card-img-container">
          <img
            className="service__card-img"
            src={DEFAULT_STATE.image}
            alt="flower"
          />
        </div>
        <h3 className="service__card-title">{DEFAULT_STATE.serviceTitle}</h3>
        <p className="service__card-subtitle">{DEFAULT_STATE.subtitle}</p>
        <p className="service__card-description">{DEFAULT_STATE.description}</p>
        <div className="service__card-price-booknow-container">
          <p className="service__card-price">{`${DEFAULT_STATE.price}`}</p>
          <button className="service__card-booknow">Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;

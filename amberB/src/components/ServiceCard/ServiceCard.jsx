import "./ServiceCard.css";

const DEFAULT_STATE = {
  serviceTitle: "Title",
  subtitle: "Subtitle (Optional)",
  price: "$00",
  description: "Description will go here..",
};

function ServiceCard({ service, imageSrc }) {
  const { serviceTitle, subtitle, price, description } = {
    ...service,
  };

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
          <p className="service__card-price">{`$${price}`}</p>
          <button className="service__card-booknow">Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;

import React from "react";
import "./ServiceCard.css";
import flower from "../../assets/flower_array/flower_array1.png";

function ServiceCard() {
  const img = this.img;
  const title = this.title;
  const descripstion = this.descripstion;
  const price = this.price;

  return (
    <div className="service__card">
      <img className="service__card-img" src={img} alt="image of flower" />
      <h3 className="service__card-title">{title}</h3>
      <p className="service__card-descripstion">{descripstion}</p>
      <p className="service__card-price">{price}</p>
      <button className="service__card-btn">{"Add to Cart"}</button>
    </div>
  );
}

export default ServiceCard;

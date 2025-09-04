import React from "react";
import "./ServicesList.css";
import ServiceCard from "../ServiceCard/ServiceCard";

function ServiceList() {
  return (
    <div className="services__list">
      <ul className="services__list-container">
        <li className="serivces__list-card">
          <ServiceCard />
        </li>
      </ul>
    </div>
  );
}

export default ServiceList;

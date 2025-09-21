import React, { useContext } from "react";
import "./ServicesList.css";
import ServiceCard from "../ServiceCard/ServiceCard";
import { ServicesCreatedContext } from "../../Context/ServicesCreatedContext";

function ServicesList({ deleteCardModal, editCardModal }) {
  const { serviceData } = useContext(ServicesCreatedContext);
  return (
    <div className="services__list">
      <ul className="services__list-container">
        {serviceData?.map((service) => (
          <li key={service._id || service.id} className="services__list-card">
            <ServiceCard
              service={service}
              deleteCardModal={deleteCardModal}
              editCardModal={editCardModal}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServicesList;

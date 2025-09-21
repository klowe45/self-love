import React, { useState } from "react";
import "./FilterServices.css";
import { ServicesCreatedContext } from "../../Context/ServicesCreatedContext";
import ServicesList from "../ServicesList/ServicesList";
function FilterServices({ deleteCardModal, editCardModal }) {
  const { serviceData } = useState(ServicesCreatedContext);

  return (
    <section className="filter">
      <div className="filter__container">
        <h1 className="filter__title">Edit available services</h1>
        <ul className="filter__list">
          <li className="filter__item">
            <ServicesList
              deleteCardModal={deleteCardModal}
              editCardModal={editCardModal}
            />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default FilterServices;

import React, { useContext, useState } from "react";
import "./ServicesList.css";
import ServiceCard from "../ServiceCard/ServiceCard";
import { ServicesCreatedContext } from "../../Context/ServicesCreatedContext";
import EditServiceCardModal from "../EditServiceCardModal/EditServiceCardModal";
import { request } from "../utils/auth";

function ServicesList({ deleteCardModal, editCardModal }) {
  const { serviceData } = useContext(ServicesCreatedContext);
  const [editing, setEditing] = useState({
    open: false,
    id: null,
    service: null,
  });
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
        {editing.open && (
          <EditServiceCardModal
            initial={editing.service}
            onClose={() => setEditing({ open: false, id: null, service: nukk })}
            onSubmit={async (values, imageFile) => {
              const fd = new FormData();
              fd.append("serviceTitle", values.serviceTitle),
                fd.append("subtitle", values.subtitle || ""),
                fd.append("price", values.price),
                fd.append("description", values.description);
            }}
          />
        )}
      </ul>
    </div>
  );
}

export default ServicesList;

import React, { useEffect, useRef, useState } from "react";
import "./AddServices.css";
import defaultImage from "../../assets/flower_array/flower_array1.png";
import { Navigate, useNavigate } from "react-router-dom";
import { useActionState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const INITIAL_STATE = {
  success: false,
  service: {
    serviceTitle: "Title",
    subtitle: "Subtitle (Optional",
    price: "00",
    description: "Description will go here..",
  },
};

const DEFAULT_STATE = {
  serviceTitle: "",
  subtitle: "",
  price: "",
  description: "",
};

function AddServices() {
  const navigate = useNavigate();

  const handleReturn = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  /*handling of form*/

  const [data, submitAction, isPending] = useActionState(
    async (prevState, formData) => {
      const serviceTitle = formData.get("serviceTitle");
      const subtitle = formData.get("subtitle");
      const price = formData.get("price");
      const description = formData.get("description");

      return {
        success: true,
        service: { serviceTitle, subtitle, price, description },
      };
    },
    INITIAL_STATE
  );

  const service = data?.service ?? DEFAULT_STATE;

  /* image states */

  const [imageSrc, setImageSrc] = useState(defaultImage);

  const fileRef = useRef(null);
  const objectUrlRef = useRef(null);

  const openFilePicker = () => {
    fileRef.current?.click();
    console.log("clicked");
  };

  const onImgChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);

    const url = URL.createObjectURL(file);
    objectUrlRef.current = url;
    setImageSrc(url);
  };

  useEffect(() => {
    return () => {
      if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
    };
  }, []);

  return (
    <section className="services">
      <div className="services__header">
        <div className="services__header-return-title">
          <button className="services__return-btn" onClick={handleReturn}>
            Return
          </button>
          <h1 className="services__title">Add New Service</h1>
        </div>
        <p className="services__description">
          Create a new self-love empowerment session
        </p>
      </div>
      <div className="services__container">
        <form action={submitAction} className="services__form">
          <h3 className="services__form-title">Service Details</h3>
          <p className="services__form-description">
            Fill in the information for your new offering
          </p>
          <div className="services__form-inputs">
            <ul className="services__form-list">
              <li className="services__form-list-item">
                <label className="services__form-label">
                  Service Title *
                  <input
                    type="text"
                    name="serviceTitle"
                    className="services__form-input"
                    placeholder="Service Title"
                  />
                </label>
              </li>
              <li className="services__form-list-item">
                <label className="services__form-label">
                  {"Subtitle (Optional)"}
                  <input
                    type="text"
                    name="subtitle"
                    className="services__form-input"
                    placeholder="Subtitle"
                  />
                </label>
              </li>
              <li className="services__form-list-item">
                <label className="services__form-label">
                  {"Price (USD) *"}
                  <input
                    type="number"
                    name="price"
                    className="services__form-input"
                    placeholder="Price"
                  />
                </label>
              </li>
            </ul>
            <div className="services__form-label-description">
              Description *
              <input
                type="text"
                name="description"
                className="services__form-input-description"
                placeholder="Description"
              />
            </div>
          </div>
          <input
            type="file"
            name="image"
            accept="image/*"
            ref={fileRef}
            style={{ display: "none" }}
            onChange={onImgChange}
          />
          <div className="services__img-upload">
            <img
              src={imageSrc}
              alt="flower"
              className="services__img-upload-preview"
            />
            <button
              className="services__img-upload-btn"
              type="button"
              onClick={openFilePicker}
            >
              Upload Custom Image
            </button>
          </div>

          <ServiceCard service={service} imageSrc={imageSrc} />

          <div className="services__form-btns">
            <button className="services__form-cancel-btn">Cancel</button>
            <button
              className="services__form-submit-btn"
              tpye="submit"
              disabled={isPending}
            >
              Create Service
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AddServices;

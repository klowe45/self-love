import React from "react";
import "./AddServices.css";
import flower from "../../assets/flower_array/flower_array1.png";

function AddServices() {
  return (
    <section className="services">
      <div className="services__header">
        <h1 className="services__title">Add New Service</h1>
        <p className="services__description">
          Create a new self-love empowerment session
        </p>
      </div>
      <div className="services__container">
        <form action="" className="services__form">
          <h3 className="services__form-title">Service Details</h3>
          <p className="services__form-description">
            Fill in the information for your new offering
          </p>
          <div className="services__form-inputs">
            <ul className="services__form-list">
              <li className="services__form-list-item">
                <label htmlFor="service-title" className="services__form-label">
                  Service Title *
                  <input
                    type="text"
                    className="services__form-input"
                    placeholder="Service name"
                  />
                </label>
              </li>
              <li>
                <label htmlFor="subtitle" className="services__form-label">
                  {"Subtitle (Optional)"}
                  <input
                    type="text"
                    className="services__form-input"
                    placeholder="Price"
                  />
                </label>
              </li>
              <li>
                <label htmlFor="price" className="services__form-label">
                  {"Price (USD) *"}
                  <input
                    type="text"
                    className="services__form-input"
                    placeholder="Price"
                  />
                </label>
              </li>
            </ul>
            <div htmlFor="description" className="services__form-label">
              Description *
              <input
                type="text"
                className="services__form-input"
                placeholder="Description"
              />
            </div>
          </div>
          <div className="services__img-upload">
            <img
              src={flower}
              alt="flower"
              className="services__img-upload-preview"
            />
            <button className="services__img-upload-btn">
              Upload Custom Image
            </button>
          </div>
          <div className="services__card-preview">
            <img
              className="services__card-preview-img"
              src={flower}
              alt="flower"
            />
            <div className="services__card-preview-block">
              <h3 className="services__card-preview-title">Service</h3>
              <p className="services__card-preview-description">
                This is for making you feel better
              </p>
              <p className="services__card-preview-price">$25</p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AddServices;

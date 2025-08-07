import React from "react";
import "./BookOnline.css";
import flower from "../../assets//title_array/logo1.png";
function BookOnline() {
  return (
    <section className="bookonline">
      <h1 className="bookonline__title">Book Now</h1>

      <div className="bookonline__container">
        <div className="bookonline__product">
          <img src={flower} alt="flower" className="bookonline__product-img" />
          <div className="bookonline__product-content">
            <h3 className="bookonline__product-title">Romanticizing My Life</h3>
            <p className="bookonline__product-price">$25</p>
            <button className="bookonline__product-btn">Book Now</button>
          </div>
        </div>

        <div className="bookonline__product">
          <img src={flower} alt="flower" className="bookonline__product-img" />
          <div className="bookonline__product-content">
            <h3 className="bookonline__product-title">
              Chasing Waterfalls: A local day retreat
            </h3>
            <p className="bookonline__product-text">Manifesting your Future</p>
            <p className="bookonline__product-price">$25</p>
            <button className="bookonline__product-btn">Book Now</button>
          </div>
        </div>
        <div className="bookonline__product">
          <img src={flower} alt="flower" className="bookonline__product-img" />
          <div className="bookonline__product-content">
            <h3 className="bookonline__product-title">
              Chasing Waterfalls: A local day retreat
            </h3>
            <p className="bookonline__product-text">Manifesting your Future</p>
            <p className="bookonline__product-price">$25</p>
            <button className="bookonline__product-btn">Book Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookOnline;

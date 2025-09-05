import React from "react";
import "./BookOnline.css";
import ServiceList from "../ServicesList/ServicesList";

function BookOnline() {
  return (
    <section className="bookonline">
      <div className="bookonline__header">
        <h1 className="bookonline__header-title">Book your Transformation</h1>
        <p className="bookonline__header-text">
          Choose from our carefully crafted self-love empowerment sessions
          designed to
        </p>
        <p className="bookonline__header-text">
          help you manifest your best life and embrace your authentic self.
        </p>
      </div>
      <div className="bookonline__available">
        <h1 className="bookonline__available-title">Available Sessions</h1>
        <p className="bookonline__available-text">
          Select the session that resonates with your journey
        </p>
        <ServiceList />
      </div>
      <div className="bookonline__services"></div>
    </section>
  );
}

export default BookOnline;

import React, { useState } from "react";
import "./ServicesDropDown.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function ServicesDropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const navigate = useNavigate();

  const handleWorkshopClick = () => {
    navigate("/workshop");
  };

  return (
    <div className="dropdown">
      <button className="dropdown__button" onClick={toggleMenu}>
        Services
      </button>
      {isOpen && (
        <ul className="dropdown__menu">
          <Link to={"/workshop"} className="dropdown__item-btn">
            Workplace WorkShop
          </Link>
        </ul>
      )}
    </div>
  );
}

export default ServicesDropDown;

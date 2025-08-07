import React from "react";
import "./Navigation.css";
import ServicesDropDown from "../ServicesDropDown/ServicesDropDown";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Navigation({ closeModal, activeModal }) {
  const navigate = useNavigate();

  return (
    <nav className="header__nav">
      <ul className="header__nav-links">
        <li>
          <button
            className="header__nav-btn"
            onClick={() => navigate("/")}
            aria-label="Go to Home"
            type="button"
          >
            Home
          </button>
        </li>
        <li>
          <button
            className="header__nav-btn"
            aria-label="Go to Mission"
            type="button"
          >
            Mission
          </button>
        </li>
        <li>
          <button
            className="header__nav-btn"
            aria-label="Go to About"
            type="button"
          >
            About
          </button>
        </li>
        <li className="dropdown">
          <ServicesDropDown
            closeModal={closeModal}
            isOpen={activeModal === "dropDownMenu"}
          />
        </li>
        <li>
          <button
            className="header__nav-btn"
            aria-label="Go to Pop-up Classes"
            type="button"
          >
            Pop-up Classes
          </button>
        </li>
        <li>
          <Link
            to={"/bookonline"}
            className="header__nav-btn"
            aria-label="Go to Book Online"
            type="button"
          >
            Book Online
          </Link>
        </li>
        <li>
          <button
            className="header__nav-btn"
            aria-label="Go to Contact"
            type="button"
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

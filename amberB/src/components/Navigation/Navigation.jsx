import React from "react";
import "./Navigation.css";
import ServicesDropDown from "../ServicesDropDown/ServicesDropDown";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function Navigation({ closeModal, activeModal, isLoggedIn }) {
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (id) => {
    const scroll = () =>
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });

    if (location.pathname !== "/") {
      navigate("/");
      requestAnimationFrame(() => requestAnimationFrame(scroll));
    } else {
      scroll();
    }
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-links">
        <li>
          <button
            className="header__nav-btn"
            onClick={() => navigate("/")}
            aria-label="Go to Home"
          >
            Home
          </button>
        </li>
        <li>
          <button
            className="header__nav-btn"
            aria-label="Go to Mission"
            type="button"
            onClick={() => goToSection("mission")}
          >
            Mission
          </button>
        </li>
        <li className="dropdown">
          <ServicesDropDown
            closeModal={closeModal}
            isOpen={activeModal === "dropDownMenu"}
          />
        </li>
        {isLoggedIn && (
          <>
            <li>
              <Link
                to={"/bookonline"}
                className="header__nav-btn-link"
                aria-label="Go to Book Online"
              >
                Book Online
              </Link>
            </li>
            <li>
              <Link
                className="header__nav-btn-link"
                to={"/addservice"}
                aria-label="Adding serivces"
              >
                Add Service
              </Link>
            </li>
          </>
        )}
        <li>
          <button
            className="header__nav-btn"
            aria-label="Go to Contact"
            type="button"
            onClick={() => goToSection("contact")}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

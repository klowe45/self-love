import React from "react";
import "./Header.css";
import avatar from "../../assets/amber_avatar.jpg";
import Navigation from "../Navigation/Navigation";

function Header({ openDropDownMenu, isLoggedIn, handleSignInModal }) {
  const handleOnSignInClick = () => {
    handleSignInModal();
  };
  return (
    <header className="header">
      <div className="header__owner">
        <img className="header__avatar" src={avatar} alt="avatar" />
        <h2 className="header__info">
          Ms. Amber Broihier, M.Ed. BBA Self Love Empowerment Teacher
        </h2>
        <button className="header__cart"></button>
        {!isLoggedIn ? (
          <button className="header__signin" onClick={handleOnSignInClick}>
            Sign In
          </button>
        ) : (
          <button className="header__logout">Log Out</button>
        )}
      </div>

      <div className="header__navi-container">
        <Navigation openDropDownMenu={openDropDownMenu} />
      </div>
    </header>
  );
}

export default Header;

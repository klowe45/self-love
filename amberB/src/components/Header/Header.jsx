import React from "react";
import "./Header.css";
import avatar from "../../assets/amber_avatar.jpg";
import Navigation from "../Navigation/Navigation";
import shoppingCart from "../../assets/icons/cart.svg";

function Header({
  openDropDownMenu,
  isLoggedIn,
  handleSignInModal,
  handleLogout,
}) {
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
        <div className="header__navi-container">
          <Navigation
            openDropDownMenu={openDropDownMenu}
            isLoggedIn={isLoggedIn}
          />
        </div>
        {!isLoggedIn ? (
          <button className="header__signin" onClick={handleOnSignInClick}>
            Sign In
          </button>
        ) : (
          <>
            <button className="header__cart">
              <div className="header__cart-counter">{}</div>
              <img
                src={shoppingCart}
                alt="shopping cart"
                className="header__cart-img"
              />
            </button>
            <button className="header__logout" onClick={handleLogout}>
              Log Out
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;

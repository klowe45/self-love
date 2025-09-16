import "./Header.css";
import Navigation from "../Navigation/Navigation";
import shoppingCartIcon from "../../assets/icons/cart.svg";
import ShoppingCartCount from "../ShoppingCartCount/ShoppingCartCount";

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
        <h2 className="header__info">
          Ms. Amber Broihier, M.Ed. BBA Self Love Empowerment Teacher
        </h2>

        <Navigation
          openDropDownMenu={openDropDownMenu}
          isLoggedIn={isLoggedIn}
        />

        {!isLoggedIn ? (
          <button className="header__signin" onClick={handleOnSignInClick}>
            Sign In
          </button>
        ) : (
          <>
            <button className="header__cart">
              <ShoppingCartCount />
              <img
                src={shoppingCartIcon}
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

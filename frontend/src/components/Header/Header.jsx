import { useRef, useState } from "react";

import { Link } from "react-router-dom";

import "./Header.css";

function Header({ favoriteCount, currentUser, onLogout }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function handleKeyDown(event) {
    if (event.key === "Escape" && isMenuOpen) {
      closeMenu();
      menuButtonRef.current?.focus();
    }
  }

  return (
    <header className="header" onKeyDown={handleKeyDown}>
      <h2 className="header__logo">Luma</h2>

      <button
        className="header__menu-toggle"
        type="button"
        ref={menuButtonRef}
        aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isMenuOpen}
        aria-controls="header-navigation"
        onClick={() => setIsMenuOpen((current) => !current)}
      >
        <span aria-hidden="true">{isMenuOpen ? "×" : "☰"}</span>
      </button>

      <nav
        id="header-navigation"
        className={`header__nav ${isMenuOpen ? "header__nav_open" : ""}`}
        aria-label="Main navigation"
        onClick={closeMenu}
      >
        <Link className="header__link" to="/">
          Home
        </Link>

        <Link className="header__link" to="/discover">
          Discover
        </Link>

        <Link className="header__link" to="/art">
          Art
        </Link>

        <Link className="header__link" to="/favorites">
          Favorites ({favoriteCount})
        </Link>

        <Link className="header__link" to="/trips">
          Trips
        </Link>

        <Link className="header__link" to="/journal">
          Journal
        </Link>

        {currentUser ? (
          <>
            <span className="header__link">Hello, {currentUser.name}</span>

            <button
              className="header__link header__logout"
              type="button"
              onClick={onLogout}
            >
              Log out
            </button>
          </>
        ) : (
          <>
            <Link className="header__link" to="/login">
              Log in
            </Link>

            <Link className="header__link" to="/signup">
              Sign up
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;

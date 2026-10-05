import { Link } from "react-router-dom";

import "./Header.css";

function Header({ favoriteCount, currentUser, onLogout }) {
  return (
    <header className="header">
      <h2 className="header__logo">Luma</h2>

      <nav className="header__nav">
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

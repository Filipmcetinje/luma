import { Link } from "react-router-dom";

import "./Header.css";

function Header() {
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

        <Link className="header__link" to="/trips">
          Trips
        </Link>

        <Link className="header__link" to="/journal">
          Journal
        </Link>
      </nav>
    </header>
  );
}

export default Header;

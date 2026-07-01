import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h2 className="header__logo">Luma</h2>

      <nav className="header__nav">
        <a className="header__link" href="/">
          Home
        </a>

        <a className="header__link" href="/">
          Discover
        </a>

        <a className="header__link" href="/">
          Trips
        </a>

        <a className="header__link" href="/">
          Journal
        </a>
      </nav>
    </header>
  );
}

export default Header;

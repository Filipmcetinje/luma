import "./SearchBar.css";

function SearchBar({ search, setSearch }) {
  return (
    <div className="search-bar">
      <input
        className="search-bar__input"
        type="text"
        placeholder="Search places..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;

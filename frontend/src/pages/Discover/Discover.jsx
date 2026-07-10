import { useState } from "react";

import "./Discover.css";
import PlaceCard from "../../components/PlaceCard/PlaceCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import places from "../../data/places";

const categories = [
  "All",
  "Mountain",
  "Coast",
  "Nature",
  "Photography",
  "Art",
  "Cafés",
];

function Discover({ favoritePlaceIds, onToggleFavorite }) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPlaces = places.filter((place) => {
    const matchesSearch = place.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || place.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="discover">
      <section className="discover__intro">
        <h1 className="discover__title">Discover Montenegro</h1>

        <p className="discover__text">
          Find inspiring places for painting, photography, writing, and creative
          travel.
        </p>
      </section>

      <SearchBar search={search} setSearch={setSearch} />

      <div className="discover__filters">
        {categories.map((category) => (
          <button
            className="discover__filter-button"
            key={category}
            type="button"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <section className="discover__places">
        {filteredPlaces.map((place) => (
          <PlaceCard
            key={place.id}
            place={place}
            isFavorite={favoritePlaceIds.includes(place.id)}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </section>
    </main>
  );
}

export default Discover;

import { useState } from "react";

import "./Discover.css";
import PlaceCard from "../../components/PlaceCard/PlaceCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import places from "../../data/places";

function Discover({ favoritePlaceIds, onToggleFavorite }) {
  const [search, setSearch] = useState("");

  const filteredPlaces = places.filter((place) => {
    return place.title.toLowerCase().includes(search.toLowerCase());
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

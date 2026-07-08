import "./Favorites.css";
import PlaceCard from "../../components/PlaceCard/PlaceCard";

function Favorites({ favoritePlaces, favoritePlaceIds, onToggleFavorite }) {
  return (
    <main className="favorites">
      <h1 className="favorites__title">Saved Places</h1>
      <section className="favorites__places">
        {favoritePlaces.map((place) => (
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

export default Favorites;

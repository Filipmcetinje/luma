import { Link } from "react-router-dom";
import "./Favorites.css";
import PlaceCard from "../../components/PlaceCard/PlaceCard";

function Favorites({ favoritePlaces, favoritePlaceIds, onToggleFavorite }) {
  return (
    <main className="favorites">
      <section className="favorites__hero">
        <div className="favorites__hero-content">
          <h1 className="favorites__title">Saved Places</h1>
          <p className="favorites__subtitle">
            Keep your favorite creative destinations together for future trips.
          </p>
        </div>
      </section>

      <section className="favorites__places">
        {favoritePlaces.length === 0 ? (
          <div className="favorites__empty">
            <h2 className="favorites__empty-title">No saved places yet</h2>
            <p className="favorites__empty-text">
              Explore Montenegro and save the places that inspire you.
            </p>
            <Link className="favorites__discover-link" to="/discover">
              Discover Places
            </Link>
          </div>
        ) : (
          favoritePlaces.map((place) => (
            <PlaceCard
              key={place.id}
              place={place}
              isFavorite={favoritePlaceIds.includes(place.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))
        )}
      </section>
    </main>
  );
}

export default Favorites;

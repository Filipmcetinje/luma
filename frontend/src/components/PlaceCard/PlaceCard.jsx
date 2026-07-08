import { Link } from "react-router-dom";

import "./PlaceCard.css";

function PlaceCard({ place, isFavorite, onToggleFavorite }) {
  function handleSaveClick(event) {
    event.preventDefault();
    onToggleFavorite(place.id);
  }

  return (
    <article className="place-card">
      <Link className="place-card__link" to={`/places/${place.id}`}>
        <div className="place-card__image-placeholder">Image</div>

        <div className="place-card__content">
          <h2 className="place-card__title">{place.title}</h2>
          <p className="place-card__location">{place.location}</p>
          <p className="place-card__category">{place.category}</p>
        </div>
      </Link>

      <button className="place-card__button" onClick={handleSaveClick}>
        {isFavorite ? "Saved" : "Save"}
      </button>
    </article>
  );
}

export default PlaceCard;

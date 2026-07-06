import "./PlaceCard.css";

function PlaceCard({ place }) {
  return (
    <article className="place-card">
      <div className="place-card__image-placeholder">Image</div>

      <div className="place-card__content">
        <h2 className="place-card__title">{place.title}</h2>

        <p className="place-card__location">{place.location}</p>

        <p className="place-card__category">{place.category}</p>

        <button className="place-card__button">Save</button>
      </div>
    </article>
  );
}

export default PlaceCard;

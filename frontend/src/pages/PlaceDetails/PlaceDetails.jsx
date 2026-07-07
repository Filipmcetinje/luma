import { useParams } from "react-router-dom";

import "./PlaceDetails.css";
import places from "../../data/places";

function PlaceDetails() {
  const { placeId } = useParams();

  const place = places.find((place) => place.id === Number(placeId));

  if (!place) {
    return (
      <main className="place-details">
        <h1>Place not found</h1>
      </main>
    );
  }

  return (
    <main className="place-details">
      <div className="place-details__image-placeholder">Image</div>

      <section className="place-details__content">
        <p className="place-details__category">{place.category}</p>

        <h1 className="place-details__title">{place.title}</h1>

        <p className="place-details__location">{place.location}</p>

        <p className="place-details__description">{place.description}</p>

        <p className="place-details__best-time">Best time: {place.bestTime}</p>
      </section>
    </main>
  );
}

export default PlaceDetails;

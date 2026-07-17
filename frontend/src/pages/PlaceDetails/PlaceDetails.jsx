import { useState } from "react";
import { useParams } from "react-router-dom";

import "./PlaceDetails.css";
import places from "../../data/places";

function PlaceDetails({ trips, onAddPlaceToTrip }) {
  const { placeId } = useParams();
  const [selectedTripId, setSelectedTripId] = useState("");

  const place = places.find((place) => place.id === Number(placeId));

  function handleAddToTrip() {
    if (!selectedTripId) {
      return;
    }

    onAddPlaceToTrip(selectedTripId, place.id);
  }

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

      <section className="place-details__trip-section">
        <h2 className="place-details__trip-title">Add to a trip</h2>

        {trips.length === 0 ? (
          <p className="place-details__trip-message">
            Create a trip first before adding this place.
          </p>
        ) : (
          <>
            <select
              className="place-details__trip-select"
              value={selectedTripId}
              onChange={(event) => setSelectedTripId(event.target.value)}
            >
              <option value="" disabled>
                Choose a trip
              </option>

              {trips.map((trip) => (
                <option key={trip.id} value={trip.id}>
                  {trip.name}
                </option>
              ))}
            </select>

            <button
              className="place-details__trip-button"
              type="button"
              onClick={handleAddToTrip}
              disabled={!selectedTripId}
            >
              Add to Trip
            </button>
          </>
        )}
      </section>
    </main>
  );
}

export default PlaceDetails;

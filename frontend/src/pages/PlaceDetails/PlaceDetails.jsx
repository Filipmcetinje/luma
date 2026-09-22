import { useState } from "react";
import { useParams } from "react-router-dom";

import places from "../../data/places";
import "./PlaceDetails.css";

function PlaceDetails({ trips, onAddPlaceToTrip }) {
  const { placeId } = useParams();
  const [selectedTripId, setSelectedTripId] = useState("");
  const [addMessage, setAddMessage] = useState("");
  const [addMessageType, setAddMessageType] = useState("");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const place = places.find((place) => place.id === Number(placeId));

  const galleryImages = place?.gallery ?? (place?.image ? [place.image] : []);

  const selectedImage = galleryImages[selectedImageIndex] ?? place?.image;

  function handleAddToTrip() {
    if (!selectedTripId) {
      return;
    }

    const selectedTrip = trips.find(
      (trip) => trip.id === Number(selectedTripId),
    );

    if (selectedTrip?.places.includes(place.id)) {
      setAddMessage(`${place.title} is already in this trip.`);
      setAddMessageType("warning");
      return;
    }

    onAddPlaceToTrip(selectedTripId, place.id);
    setAddMessage(`${place.title} was added to your trip.`);
    setAddMessageType("success");
  }

  if (!place) {
    return (
      <main className="place-details">
        <h1 className="place-details__title">Place not found</h1>
      </main>
    );
  }

  return (
    <main className="place-details">
      <img
        className="place-details__image"
        src={selectedImage}
        alt={place.title}
      />

      {galleryImages.length > 1 && (
        <div className="place-details__gallery">
          {galleryImages.map((image, index) => (
            <button
              className={`place-details__thumbnail-button ${
                selectedImageIndex === index
                  ? "place-details__thumbnail-button_active"
                  : ""
              }`}
              key={image}
              type="button"
              onClick={() => setSelectedImageIndex(index)}
              aria-label={`Show ${place.title} photo ${index + 1}`}
            >
              <img className="place-details__thumbnail" src={image} alt="" />
            </button>
          ))}
        </div>
      )}

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

            {addMessage && (
              <p
                className={`place-details__add-message place-details__add-message--${addMessageType}`}
              >
                {addMessage}
              </p>
            )}
          </>
        )}
      </section>
    </main>
  );
}

export default PlaceDetails;

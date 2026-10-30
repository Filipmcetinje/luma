import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import places from "../../data/places";
import "./PlaceDetails.css";

function PlaceDetails({ trips, onAddPlaceToTrip }) {
  const { placeId } = useParams();
  const navigate = useNavigate();
  const [selectedTripId, setSelectedTripId] = useState("");
  const [addMessage, setAddMessage] = useState("");
  const [addMessageType, setAddMessageType] = useState("");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isAdding, setIsAdding] = useState(false);

  const place = places.find((place) => place.id === Number(placeId));

  const galleryImages = place?.gallery ?? (place?.image ? [place.image] : []);

  const selectedImage = galleryImages[selectedImageIndex] ?? place?.image;

  async function handleAddToTrip() {
    if (!selectedTripId || !place || isAdding) return;

    setAddMessage("");
    setAddMessageType("");

    const selectedTrip = trips.find(
      (trip) => String(trip.id) === selectedTripId,
    );

    if (!selectedTrip) {
      setAddMessage("Please choose an available trip.");
      setAddMessageType("warning");
      return;
    }

    if (selectedTrip.places.includes(place.id)) {
      setAddMessage(`${place.title} is already in this trip.`);
      setAddMessageType("warning");
      return;
    }

    setIsAdding(true);

    try {
      await onAddPlaceToTrip(selectedTripId, place.id);

      setAddMessage(`${place.title} was added to your trip.`);
      setAddMessageType("success");
    } catch (error) {
      setAddMessage(error.message || "Unable to add this place.");
      setAddMessageType("warning");
    } finally {
      setIsAdding(false);
    }
  }

  if (!place) {
    return (
      <main className="place-details">
        <h1 className="place-details__title">Place not found</h1>
      </main>
    );
  }

  return (
    <main className="place-details-page">
      <title>{`${place.title} | Luma`}</title>

      <meta name="description" content={place.description} />

      <div className="place-details">
        <button
          className="place-details__back"
          type="button"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>
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

          <a
            className="place-details__map-link"
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              `${place.title}, ${place.location}, Montenegro`,
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in Google Maps
          </a>

          <p className="place-details__description">{place.description}</p>
        </section>

        {place.id === 1 && (
          <section className="place-details__content">
            <h2>Where to stay around Kotor</h2>

            <p className="place-details__description">
              Start with the places you want to explore and how you plan to get
              around. Compare the Old Town properties below with accommodation
              in Dobrota, Prčanj, Ljuta, Orahovac, and Stoliv through their
              individual guides. Before booking, check the property’s exact
              location, transport options, and parking if you’re driving.
            </p>
          </section>
        )}

        {place.nearbyPlaces?.length > 0 && (
          <section className="place-details__nearby">
            <h2>Places around {place.title}</h2>

            <ul>
              {place.nearbyPlaces.map((nearbyPlace) => (
                <li key={nearbyPlace.slug}>
                  <Link to={`/places/${place.id}/nearby/${nearbyPlace.slug}`}>
                    {nearbyPlace.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {place.accommodationOptions?.length > 0 && (
          <section className="place-details__trip-section">
            <h2 className="place-details__trip-title">Accommodation options</h2>

            <ul className="place-details__accommodations">
              {place.accommodationOptions.map((option) => (
                <li key={option.url}>
                  <a
                    href={option.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>{option.name}</strong>
                    {option.description && <p>{option.description}</p>}
                    <span>View property details →</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

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
                disabled={isAdding}
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
                disabled={!selectedTripId || isAdding}
              >
                {isAdding ? "Adding…" : "Add to Trip"}
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
      </div>
    </main>
  );
}

export default PlaceDetails;

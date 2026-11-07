import { useState } from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";

import places from "../../data/places";
import "./PlaceDetails.css";

function PlaceDetails({ trips, onAddPlaceToTrip }) {
  const { placeId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedTripId, setSelectedTripId] = useState(() =>
    String(location.state?.newTripId ?? ""),
  );
  const [addMessage, setAddMessage] = useState("");

  const [addMessageType, setAddMessageType] = useState("");
  const [addedTripId, setAddedTripId] = useState("");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isAdding, setIsAdding] = useState(false);
  const [planningSelection, setPlanningSelection] = useState(null);

  const place = places.find((place) => place.id === Number(placeId));

  const galleryImages = place?.gallery ?? (place?.image ? [place.image] : []);

  const selectedImage = galleryImages[selectedImageIndex] ?? place?.image;

  async function handleAddToTrip() {
    if (!selectedTripId || !place || isAdding) return;

    setAddMessage("");
    setAddMessageType("");
    setAddedTripId("");

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

      setAddedTripId(selectedTripId);
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

  const transportAdvice = place.transportAdvice || "";

  const planningTabs = [
    ...(place.nearbyPlaces?.length
      ? [{ id: "nearby", label: `Around ${place.title}` }]
      : []),
    ...(place.accommodationOptions?.length
      ? [{ id: "accommodation", label: "Accommodation" }]
      : []),
    ...(transportAdvice ? [{ id: "transport", label: "Transport" }] : []),
  ];

  const activePlanningTab =
    planningSelection?.placeId === place.id &&
    planningTabs.some((tab) => tab.id === planningSelection.tabId)
      ? planningSelection.tabId
      : planningTabs[0]?.id;

  function selectPlanningTab(tabId) {
    setPlanningSelection({ placeId: place.id, tabId });
  }

  function handlePlanningKeyDown(event, index) {
    let nextIndex;

    if (event.key === "ArrowRight") {
      nextIndex = (index + 1) % planningTabs.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (index - 1 + planningTabs.length) % planningTabs.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = planningTabs.length - 1;
    } else {
      return;
    }

    event.preventDefault();

    const nextTab = planningTabs[nextIndex];
    selectPlanningTab(nextTab.id);
    document.getElementById(`planning-tab-${nextTab.id}`)?.focus();
  }

  return (
    <main className="place-details-page">
      <title>{`${place.title}, Montenegro: Travel Guide | Luma`}</title>

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

        {planningTabs.length > 0 && (
          <section
            className="place-details__planning"
            aria-labelledby="planning-title"
          >
            <h2 id="planning-title">Plan your stay</h2>

            <div
              className="place-details__tabs"
              role="tablist"
              aria-label={`Plan your stay in ${place.title}`}
            >
              {planningTabs.map((tab, index) => (
                <button
                  className="place-details__tab"
                  key={tab.id}
                  id={`planning-tab-${tab.id}`}
                  type="button"
                  role="tab"
                  aria-selected={activePlanningTab === tab.id}
                  aria-controls={`planning-panel-${tab.id}`}
                  tabIndex={activePlanningTab === tab.id ? 0 : -1}
                  onClick={() => selectPlanningTab(tab.id)}
                  onKeyDown={(event) => handlePlanningKeyDown(event, index)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {planningTabs.map((tab) => (
              <div
                className="place-details__planning-panel"
                key={tab.id}
                id={`planning-panel-${tab.id}`}
                role="tabpanel"
                aria-labelledby={`planning-tab-${tab.id}`}
                hidden={activePlanningTab !== tab.id}
                tabIndex={0}
              >
                {tab.id === "nearby" && (
                  <ul className="place-details__area-list">
                    {place.nearbyPlaces.map((nearbyPlace) => (
                      <li key={nearbyPlace.slug}>
                        <Link
                          className="place-details__area-link"
                          to={`/places/${place.id}/nearby/${nearbyPlace.slug}`}
                        >
                          {nearbyPlace.image && (
                            <img
                              src={nearbyPlace.image}
                              alt=""
                              loading="lazy"
                            />
                          )}

                          <h3>{nearbyPlace.title}</h3>

                          {nearbyPlace.summary && <p>{nearbyPlace.summary}</p>}

                          <span>Explore {nearbyPlace.title} →</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}

                {tab.id === "accommodation" && (
                  <>
                    {place.accommodationGuide && (
                      <div className="place-details__planning-intro">
                        <h3>{place.accommodationGuide.title}</h3>

                        <p>{place.accommodationGuide.intro}</p>

                        <ul>
                          {place.accommodationGuide.areas.map((area) => (
                            <li key={area.name}>
                              <strong>{area.name}:</strong> {area.description}
                            </li>
                          ))}
                        </ul>

                        <p>{place.accommodationGuide.advice}</p>
                      </div>
                    )}

                    <ul className="place-details__property-list">
                      {place.accommodationOptions.map((option) => (
                        <li key={option.url}>
                          <h3>{option.name}</h3>

                          {option.description && <p>{option.description}</p>}

                          <a
                            href={option.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View property details ↗
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {tab.id === "transport" && (
                  <>
                    <h3>Before you set off</h3>
                    <p>{transportAdvice}</p>

                    {place.transportLinks?.length > 0 && (
                      <ul className="place-details__transport-links">
                        {place.transportLinks.map((link) => (
                          <li key={link.url}>
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {link.label} ↗
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </div>
            ))}
          </section>
        )}

        <section className="place-details__trip-section">
          <h2 className="place-details__trip-title">Add to a trip</h2>

          <Link
            className="place-details__map-link"
            to="/trips"
            state={{ returnTo: `/places/${place.id}` }}
          >
            {trips.length === 0 ? "Create a trip →" : "Create another trip →"}
          </Link>

          {trips.length === 0 ? (
            <p className="place-details__trip-message">
              You don’t have any trips yet. Create one to save {place.title} to
              it.
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
                  role="status"
                >
                  {addMessage}
                  {addMessageType === "success" && addedTripId && (
                    <>
                      {" "}
                      <Link to={`/trips/${addedTripId}`}>View trip →</Link>
                    </>
                  )}
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

import { useState } from "react";
import { Link } from "react-router-dom";
import "./Trips.css";
import places from "../../data/places";

function Trips({
  trips,
  onCreateTrip,
  onDeleteTrip,
  onRemovePlaceFromTrip,
  onUpdateTrip,
}) {
  const [tripName, setTripName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [editingTripId, setEditingTripId] = useState(null);
  const [editedTripName, setEditedTripName] = useState("");
  const [editedStartDate, setEditedStartDate] = useState("");
  const [editedEndDate, setEditedEndDate] = useState("");

  function handleTripNameChange(event) {
    setTripName(event.target.value);
  }

  function handleStartDateChange(event) {
    setStartDate(event.target.value);
  }

  function handleEndDateChange(event) {
    setEndDate(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newTrip = {
      id: Date.now(),
      name: tripName,
      startDate: startDate,
      endDate: endDate,
      places: [],
    };

    onCreateTrip(newTrip);
    setTripName("");
    setStartDate("");
    setEndDate("");
  }

  function handleEditClick(trip) {
    setEditingTripId(trip.id);
    setEditedTripName(trip.name);
    setEditedStartDate(trip.startDate);
    setEditedEndDate(trip.endDate);
  }

  function handleSaveClick(tripId) {
    const trimmedName = editedTripName.trim();

    if (!trimmedName || !editedStartDate || !editedEndDate) {
      return;
    }

    onUpdateTrip(tripId, trimmedName, editedStartDate, editedEndDate);

    setEditingTripId(null);
    setEditedTripName("");
    setEditedStartDate("");
    setEditedEndDate("");
  }

  return (
    <main className="trips">
      <h1 className="trips__title">Trip Planner</h1>

      <form className="trips__form" onSubmit={handleSubmit}>
        <label className="trips__label" htmlFor="trip-name">
          Trip name
        </label>

        <input
          className="trips__input"
          id="trip-name"
          type="text"
          placeholder="Example: Montenegro Coast Trip"
          value={tripName}
          onChange={handleTripNameChange}
        />

        <label className="trips__label" htmlFor="start-date">
          Start date
        </label>

        <input
          className="trips__input"
          id="start-date"
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
        />

        <label className="trips__label" htmlFor="end-date">
          End date
        </label>

        <input
          className="trips__input"
          id="end-date"
          type="date"
          value={endDate}
          onChange={handleEndDateChange}
        />

        <button className="trips__button" type="submit">
          Create Trip
        </button>

        <p className="trips__preview">Current trip name: {tripName}</p>
      </form>

      <section className="trips__list">
        <h2 className="trips__list-title">Your Trips</h2>

        {trips.map((trip) => {
          const placeCount = trip.places.length;

          return (
            <article className="trips__card" key={trip.id}>
              <div className="trips__card-content">
                {editingTripId === trip.id ? (
                  <input
                    className="trips__edit-input"
                    type="text"
                    value={editedTripName}
                    onChange={(event) => setEditedTripName(event.target.value)}
                  />
                ) : (
                  <h3 className="trips__card-title">
                    <Link className="trips__card-link" to={`/trips/${trip.id}`}>
                      {trip.name}
                    </Link>
                  </h3>
                )}

                {editingTripId === trip.id ? (
                  <div className="trips__edit-dates">
                    <label className="trips__edit-label">
                      Start date
                      <input
                        className="trips__edit-date-input"
                        type="date"
                        value={editedStartDate}
                        onChange={(event) =>
                          setEditedStartDate(event.target.value)
                        }
                      />
                    </label>

                    <label className="trips__edit-label">
                      End date
                      <input
                        className="trips__edit-date-input"
                        type="date"
                        value={editedEndDate}
                        onChange={(event) =>
                          setEditedEndDate(event.target.value)
                        }
                      />
                    </label>
                  </div>
                ) : (
                  <p className="trips__dates">
                    {trip.startDate} - {trip.endDate}
                  </p>
                )}

                <p className="trips__card-count">
                  {placeCount} {placeCount === 1 ? "place" : "places"}
                </p>

                <ul className="trips__places-list">
                  {trip.places.map((placeId) => {
                    const place = places.find((place) => place.id === placeId);

                    if (!place) {
                      return null;
                    }

                    return (
                      <li className="trips__place-item" key={placeId}>
                        <Link
                          className="trips__place-link"
                          to={`/places/${place.id}`}
                        >
                          {place.title}
                        </Link>

                        <button
                          className="trips__remove-place-button"
                          type="button"
                          onClick={() =>
                            onRemovePlaceFromTrip(trip.id, placeId)
                          }
                        >
                          Remove
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="trips__card-actions">
                {editingTripId === trip.id ? (
                  <>
                    <button
                      className="trips__save-button"
                      type="button"
                      onClick={() => handleSaveClick(trip.id)}
                    >
                      Save
                    </button>

                    <button
                      className="trips__cancel-button"
                      type="button"
                      onClick={() => {
                        setEditingTripId(null);
                        setEditedTripName("");
                        setEditedStartDate("");
                        setEditedEndDate("");
                      }}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="trips__edit-button"
                      type="button"
                      onClick={() => handleEditClick(trip)}
                    >
                      Edit
                    </button>

                    <button
                      className="trips__delete-button"
                      type="button"
                      onClick={() => onDeleteTrip(trip.id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}

export default Trips;

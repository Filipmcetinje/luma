import { useState } from "react";
import { Link } from "react-router-dom";
import "./Trips.css";
import places from "../../data/places";

const MAX_TRIP_NAME_LENGTH = 50;

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
  const [formError, setFormError] = useState("");
  const [editError, setEditError] = useState("");
  const [tripNotes, setTripNotes] = useState("");
  const [editedTripNotes, setEditedTripNotes] = useState("");

  function handleTripNameChange(event) {
    setTripName(event.target.value);
    setFormError("");
  }

  function handleStartDateChange(event) {
    setStartDate(event.target.value);
    setFormError("");
  }

  function handleEndDateChange(event) {
    setEndDate(event.target.value);
    setFormError("");
  }

  function handleTripNotesChange(event) {
    setTripNotes(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedName = tripName.trim();

    const tripNameAlreadyExists = trips.some(
      (trip) => trip.name.toLowerCase() === trimmedName.toLowerCase(),
    );

    if (tripNameAlreadyExists) {
      setFormError("A trip with this name already exists.");
      return;
    }

    if (endDate < startDate) {
      setFormError("End date cannot be before start date.");
      return;
    }

    setFormError("");

    const newTrip = {
      id: Date.now(),
      name: trimmedName,
      startDate: startDate,
      endDate: endDate,
      notes: tripNotes.trim(),
      places: [],
    };

    onCreateTrip(newTrip);
    setTripName("");
    setStartDate("");
    setEndDate("");
    setTripNotes("");
  }

  function handleEditClick(trip) {
    setEditingTripId(trip.id);
    setEditedTripName(trip.name);
    setEditedStartDate(trip.startDate);
    setEditedEndDate(trip.endDate);
    setEditedTripNotes(trip.notes || "");
    setEditError("");
  }

  function handleSaveClick(tripId) {
    const trimmedName = editedTripName.trim();

    if (!trimmedName || !editedStartDate || !editedEndDate) {
      setEditError("Please complete all trip fields.");
      return;
    }

    const tripNameAlreadyExists = trips.some(
      (trip) =>
        trip.id !== tripId &&
        trip.name.toLowerCase() === trimmedName.toLowerCase(),
    );

    if (tripNameAlreadyExists) {
      setEditError("A trip with this name already exists.");
      return;
    }

    if (editedEndDate < editedStartDate) {
      setEditError("End date cannot be before start date.");
      return;
    }

    setEditError("");

    onUpdateTrip(
      tripId,
      trimmedName,
      editedStartDate,
      editedEndDate,
      editedTripNotes.trim(),
    );

    setEditingTripId(null);
    setEditedTripName("");
    setEditedStartDate("");
    setEditedEndDate("");
    setEditedTripNotes("");
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
          maxLength={MAX_TRIP_NAME_LENGTH}
          onChange={handleTripNameChange}
        />

        <p className="trips__character-count">
          {tripName.length}/{MAX_TRIP_NAME_LENGTH}
        </p>

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

        <label className="trips__label" htmlFor="trip-notes">
          Trip notes
        </label>

        <textarea
          className="trips__textarea"
          id="trip-notes"
          placeholder="Add ideas, plans, or reminders for your trip"
          value={tripNotes}
          onChange={handleTripNotesChange}
        />

        {formError && <p className="trips__form-error">{formError}</p>}

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
                  <>
                    <input
                      className="trips__edit-input"
                      type="text"
                      value={editedTripName}
                      maxLength={MAX_TRIP_NAME_LENGTH}
                      onChange={(event) => {
                        setEditedTripName(event.target.value);
                        setEditError("");
                      }}
                    />

                    <p className="trips__character-count">
                      {editedTripName.length}/{MAX_TRIP_NAME_LENGTH}
                    </p>
                  </>
                ) : (
                  <h3 className="trips__card-title">
                    <Link className="trips__card-link" to={`/trips/${trip.id}`}>
                      {trip.name}
                    </Link>
                  </h3>
                )}

                {editingTripId === trip.id ? (
                  <>
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

                    <label className="trips__edit-label">
                      Trip notes
                      <textarea
                        className="trips__edit-textarea"
                        value={editedTripNotes}
                        onChange={(event) =>
                          setEditedTripNotes(event.target.value)
                        }
                      />
                    </label>

                    {editError && (
                      <p className="trips__form-error">{editError}</p>
                    )}
                  </>
                ) : (
                  <p className="trips__dates">
                    {trip.startDate} - {trip.endDate}
                  </p>
                )}

                {trip.notes && <p className="trips__notes">{trip.notes}</p>}

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
                        setEditError("");
                        setEditedTripNotes("");
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

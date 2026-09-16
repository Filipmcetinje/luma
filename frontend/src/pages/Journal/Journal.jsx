import { useEffect, useState } from "react";
import "./Journal.css";
import places from "../../data/places";
import { Link } from "react-router-dom";

function Journal({ trips }) {
  const [entryTitle, setEntryTitle] = useState("");
  const [entryText, setEntryText] = useState("");
  const [selectedPlaceId, setSelectedPlaceId] = useState("");
  const [selectedTripId, setSelectedTripId] = useState("");

  const [entries, setEntries] = useState(() => {
    const savedEntries = localStorage.getItem("journalEntries");

    return savedEntries ? JSON.parse(savedEntries) : [];
  });

  const [formError, setFormError] = useState("");

  const [editingEntryId, setEditingEntryId] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedText, setEditedText] = useState("");
  const [editedPlaceId, setEditedPlaceId] = useState("");
  const [editedTripId, setEditedTripId] = useState("");
  const [editError, setEditError] = useState("");

  useEffect(() => {
    localStorage.setItem("journalEntries", JSON.stringify(entries));
  }, [entries]);

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedTitle = entryTitle.trim();
    const trimmedText = entryText.trim();

    if (!trimmedTitle || !trimmedText) {
      setFormError("Please add both a title and journal notes.");
      return;
    }
    setFormError("");

    const newEntry = {
      id: Date.now(),
      title: trimmedTitle,
      text: trimmedText,
      placeId: selectedPlaceId ? Number(selectedPlaceId) : null,
      tripId: selectedTripId ? Number(selectedTripId) : null,
      createdAt: new Date().toLocaleDateString(),
    };

    setEntries((currentEntries) => [newEntry, ...currentEntries]);
    setEntryTitle("");
    setEntryText("");
    setSelectedPlaceId("");
    setSelectedTripId("");
  }

  function handleStartEditing(entry) {
    setEditError("");
    setEditingEntryId(entry.id);
    setEditedTitle(entry.title);
    setEditedText(entry.text);
    setEditedPlaceId(entry.placeId ? String(entry.placeId) : "");
    setEditedTripId(entry.tripId ? String(entry.tripId) : "");
  }

  function handleSaveEdit(entryId) {
    const trimmedTitle = editedTitle.trim();
    const trimmedText = editedText.trim();

    if (!trimmedTitle || !trimmedText) {
      setEditError("Please add both a title and journal notes.");
      return;
    }

    setEditError("");

    setEntries((currentEntries) =>
      currentEntries.map((entry) =>
        entry.id === entryId
          ? {
              ...entry,
              title: trimmedTitle,
              text: trimmedText,
              placeId: editedPlaceId ? Number(editedPlaceId) : null,
              tripId: editedTripId ? Number(editedTripId) : null,
            }
          : entry,
      ),
    );

    setEditingEntryId(null);
    setEditedTitle("");
    setEditedText("");
    setEditedPlaceId("");
    setEditedTripId("");
  }

  function handleCancelEdit() {
    setEditingEntryId(null);
    setEditedTitle("");
    setEditedText("");
    setEditedPlaceId("");
    setEditedTripId("");
    setEditError("");
  }

  function handleDeleteEntry(entryId) {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this journal entry?",
    );

    if (!shouldDelete) {
      return;
    }

    setEntries((currentEntries) =>
      currentEntries.filter((entry) => entry.id !== entryId),
    );
  }

  return (
    <main className="journal">
      <h1 className="journal__title">Creative Journal</h1>

      <form className="journal__form" onSubmit={handleSubmit}>
        <label className="journal__label" htmlFor="entry-title">
          Entry title
        </label>

        <input
          className="journal__input"
          id="entry-title"
          type="text"
          placeholder="Example: Morning light in Perast"
          value={entryTitle}
          onChange={(event) => setEntryTitle(event.target.value)}
        />

        <label className="journal__label" htmlFor="entry-text">
          Your notes
        </label>

        <textarea
          className="journal__textarea"
          id="entry-text"
          placeholder="Write about your ideas, memories, or creative inspiration"
          value={entryText}
          onChange={(event) => setEntryText(event.target.value)}
        />
        {formError && <p className="journal__error">{formError}</p>}

        <label className="journal__label" htmlFor="entry-place">
          Connect to a place (optional)
        </label>

        <select
          className="journal__select"
          id="entry-place"
          value={selectedPlaceId}
          onChange={(event) => setSelectedPlaceId(event.target.value)}
        >
          <option value="">No place selected</option>

          {places.map((place) => (
            <option key={place.id} value={place.id}>
              {place.title} — {place.location}
            </option>
          ))}
        </select>

        <label className="journal__label" htmlFor="entry-trip">
          Connect to a trip (optional)
        </label>

        <select
          className="journal__select"
          id="entry-trip"
          value={selectedTripId}
          onChange={(event) => setSelectedTripId(event.target.value)}
        >
          <option value="">No trip selected</option>

          {trips.length === 0 ? (
            <option disabled>No trips available</option>
          ) : (
            trips.map((trip) => (
              <option key={trip.id} value={trip.id}>
                {trip.name}
              </option>
            ))
          )}
        </select>

        <button className="journal__button" type="submit">
          Save Entry
        </button>
      </form>

      <section className="journal__entries">
        <h2 className="journal__entries-title">Your Entries</h2>

        {entries.length === 0 ? (
          <p className="journal__empty">No journal entries yet.</p>
        ) : (
          <ul className="journal__list">
            {entries.map((entry) => (
              <li className="journal__entry" key={entry.id}>
                <p className="journal__entry-date">{entry.createdAt}</p>
                {entry.placeId && (
                  <p className="journal__entry-place">
                    Place:{" "}
                    <Link
                      className="journal__entry-place-link"
                      to={`/places/${entry.placeId}`}
                    >
                      {places.find((place) => place.id === entry.placeId)
                        ?.title || "Unknown place"}
                    </Link>
                  </p>
                )}
                {entry.tripId && (
                  <p className="journal__entry-trip">
                    Trip:{" "}
                    <Link
                      className="journal__entry-trip-link"
                      to={`/trips/${entry.tripId}`}
                    >
                      {trips.find((trip) => trip.id === entry.tripId)?.name ||
                        "Unknown trip"}
                    </Link>
                  </p>
                )}
                {editingEntryId === entry.id ? (
                  <div className="journal__edit-form">
                    <input
                      className="journal__input"
                      type="text"
                      value={editedTitle}
                      onChange={(event) => setEditedTitle(event.target.value)}
                    />

                    <textarea
                      className="journal__textarea"
                      value={editedText}
                      onChange={(event) => setEditedText(event.target.value)}
                    />

                    <label
                      className="journal__label"
                      htmlFor={`edit-place-${entry.id}`}
                    >
                      Connected place
                    </label>

                    <select
                      className="journal__select"
                      id={`edit-place-${entry.id}`}
                      value={editedPlaceId}
                      onChange={(event) => setEditedPlaceId(event.target.value)}
                    >
                      <option value="">No place selected</option>

                      {places.map((place) => (
                        <option key={place.id} value={place.id}>
                          {place.title} — {place.location}
                        </option>
                      ))}
                    </select>

                    <label
                      className="journal__label"
                      htmlFor={`edit-trip-${entry.id}`}
                    >
                      Connected trip
                    </label>

                    <select
                      className="journal__select"
                      id={`edit-trip-${entry.id}`}
                      value={editedTripId}
                      onChange={(event) => setEditedTripId(event.target.value)}
                    >
                      <option value="">No trip selected</option>

                      {trips.length === 0 ? (
                        <option disabled>No trips available</option>
                      ) : (
                        trips.map((trip) => (
                          <option key={trip.id} value={trip.id}>
                            {trip.name}
                          </option>
                        ))
                      )}
                    </select>

                    {editError && <p className="journal__error">{editError}</p>}
                  </div>
                ) : (
                  <>
                    <h3 className="journal__entry-title">{entry.title}</h3>
                    <p className="journal__entry-text">{entry.text}</p>
                  </>
                )}

                {editingEntryId === entry.id ? (
                  <button
                    className="journal__edit-button"
                    type="button"
                    onClick={() => handleSaveEdit(entry.id)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="journal__edit-button"
                    type="button"
                    onClick={() => handleStartEditing(entry)}
                  >
                    Edit
                  </button>
                )}

                {editingEntryId === entry.id && (
                  <button
                    className="journal__cancel-button"
                    type="button"
                    onClick={handleCancelEdit}
                  >
                    Cancel
                  </button>
                )}

                <button
                  className="journal__delete-button"
                  type="button"
                  onClick={() => handleDeleteEntry(entry.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}

export default Journal;

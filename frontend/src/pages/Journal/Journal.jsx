import { useEffect, useState } from "react";
import "./Journal.css";
import places from "../../data/places";
import { Link } from "react-router-dom";
import {
  getJournalEntries,
  createJournalEntry,
  updateJournalEntry,
  deleteJournalEntry,
} from "../../utils/api";

function Journal({ trips, token }) {
  const [entryTitle, setEntryTitle] = useState("");
  const [entryText, setEntryText] = useState("");
  const [selectedPlaceId, setSelectedPlaceId] = useState("");
  const [selectedTripId, setSelectedTripId] = useState("");
  const [entryPhoto, setEntryPhoto] = useState("");
  const [photoError, setPhotoError] = useState("");
  const [photoInputKey, setPhotoInputKey] = useState(0);

  const [localEntries, setLocalEntries] = useState(() => {
    const savedEntries = localStorage.getItem("journalEntries");

    return savedEntries ? JSON.parse(savedEntries) : [];
  });

  const [formError, setFormError] = useState("");

  const [isCreating, setIsCreating] = useState(false);

  const [editingEntryId, setEditingEntryId] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedText, setEditedText] = useState("");
  const [editedPlaceId, setEditedPlaceId] = useState("");
  const [editedTripId, setEditedTripId] = useState("");
  const [editedPhoto, setEditedPhoto] = useState("");
  const [editPhotoError, setEditPhotoError] = useState("");
  const [editError, setEditError] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [deletingEntryId, setDeletingEntryId] = useState(null);
  const [deleteError, setDeleteError] = useState("");

  useEffect(() => {
    localStorage.setItem("journalEntries", JSON.stringify(localEntries));
  }, [localEntries]);

  const [accountEntries, setAccountEntries] = useState(null);

  const accountEntriesReady =
    token !== null && accountEntries?.token === token && !accountEntries.error;

  const entries = token
    ? accountEntriesReady
      ? accountEntries.entries
      : []
    : localEntries;

  useEffect(() => {
    if (!token) return;

    let cancelled = false;

    getJournalEntries(token)
      .then(({ entries }) => {
        if (!cancelled) {
          setAccountEntries({
            token,
            entries,
            error: "",
          });
        }
      })
      .catch((error) => {
        if (!cancelled) {
          setAccountEntries({
            token,
            entries: [],
            error: error.message || "Unable to load your journal.",
          });
        }
      });

    return () => {
      cancelled = true;
    };
  }, [token]);

  function handlePhotoChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setEntryPhoto("");
      setPhotoError("");
      return;
    }

    if (!file.type.startsWith("image/")) {
      setEntryPhoto("");
      setPhotoError("Please select an image file.");
      return;
    }

    const maximumPhotoSize = 1024 * 1024;

    if (file.size > maximumPhotoSize) {
      setEntryPhoto("");
      setPhotoError("Please select an image smaller than 1 MB.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setEntryPhoto(reader.result);
      setPhotoError("");
    };

    reader.onerror = () => {
      setEntryPhoto("");
      setPhotoError("The photo could not be loaded. Please try again.");
    };

    reader.readAsDataURL(file);
  }

  function handleEditPhotoChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setEditPhotoError("");
      return;
    }

    if (!file.type.startsWith("image/")) {
      setEditPhotoError("Please select an image file.");
      return;
    }

    const maximumPhotoSize = 1024 * 1024;

    if (file.size > maximumPhotoSize) {
      setEditPhotoError("Please select an image smaller than 1 MB.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setEditedPhoto(reader.result);
      setEditPhotoError("");
    };

    reader.onerror = () => {
      setEditPhotoError("The photo could not be loaded. Please try again.");
    };

    reader.readAsDataURL(file);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (isCreating) return;

    const trimmedTitle = entryTitle.trim();
    const trimmedText = entryText.trim();

    if (!trimmedTitle || !trimmedText) {
      setFormError("Please add both a title and journal notes.");
      return;
    }

    if (token && (accountEntries?.token !== token || accountEntries.error)) {
      setFormError("Your account journal is unavailable. Please refresh.");
      return;
    }

    if (token && entryPhoto) {
      setFormError("Account photo uploads are coming in the next step.");
      return;
    }

    setFormError("");
    setIsCreating(true);

    const details = {
      title: trimmedTitle,
      text: trimmedText,
      placeId: selectedPlaceId ? Number(selectedPlaceId) : null,
      tripId: selectedTripId || null,
    };

    try {
      if (token) {
        const { entry } = await createJournalEntry(token, details);

        if (sessionStorage.getItem("lumaToken") !== token) return;

        setAccountEntries((current) =>
          current?.token === token
            ? { ...current, entries: [entry, ...current.entries] }
            : current,
        );
      } else {
        const newEntry = {
          ...details,
          id: Date.now(),
          photo: entryPhoto || null,
          createdAt: new Date().toLocaleDateString(),
        };

        setLocalEntries((currentEntries) => [newEntry, ...currentEntries]);
      }

      setEntryTitle("");
      setEntryText("");
      setSelectedPlaceId("");
      setSelectedTripId("");
      setEntryPhoto("");
      setPhotoError("");
      setPhotoInputKey((currentKey) => currentKey + 1);
    } catch (error) {
      setFormError(error.message || "Unable to save your journal entry.");
    } finally {
      setIsCreating(false);
    }
  }

  function handleStartEditing(entry) {
    setEditError("");
    setEditingEntryId(entry.id);
    setEditedTitle(entry.title);
    setEditedText(entry.text);
    setEditedPlaceId(entry.placeId ? String(entry.placeId) : "");
    setEditedTripId(entry.tripId ? String(entry.tripId) : "");
    setEditedPhoto(entry.photo || "");
    setEditPhotoError("");
  }

  async function handleSaveEdit(entryId) {
    if (isUpdating) return;

    const trimmedTitle = editedTitle.trim();
    const trimmedText = editedText.trim();

    if (!trimmedTitle || !trimmedText) {
      setEditError("Please add both a title and journal notes.");
      return;
    }

    if (
      token &&
      (accountEntries?.token !== token ||
        accountEntries.error ||
        !accountEntries.entries.some((entry) => entry.id === entryId))
    ) {
      setEditError("This account entry is unavailable. Please refresh.");
      return;
    }

    if (token && editedPhoto) {
      setEditError("Account photo uploads are coming next.");
      return;
    }

    setEditError("");
    setIsUpdating(true);

    const details = {
      title: trimmedTitle,
      text: trimmedText,
      placeId: editedPlaceId ? Number(editedPlaceId) : null,
      tripId: editedTripId || null,
    };

    try {
      if (token) {
        const { entry: updatedEntry } = await updateJournalEntry(
          token,
          entryId,
          details,
        );

        if (sessionStorage.getItem("lumaToken") !== token) return;

        setAccountEntries((current) =>
          current?.token === token
            ? {
                ...current,
                entries: current.entries.map((entry) =>
                  entry.id === updatedEntry.id ? updatedEntry : entry,
                ),
              }
            : current,
        );
      } else {
        setLocalEntries((currentEntries) =>
          currentEntries.map((entry) =>
            entry.id === entryId
              ? { ...entry, ...details, photo: editedPhoto || null }
              : entry,
          ),
        );
      }

      handleCancelEdit();
    } catch (error) {
      setEditError(error.message || "Unable to update your journal entry.");
    } finally {
      setIsUpdating(false);
    }
  }

  function handleCancelEdit() {
    setEditingEntryId(null);
    setEditedTitle("");
    setEditedText("");
    setEditedPlaceId("");
    setEditedTripId("");
    setEditedPhoto("");
    setEditPhotoError("");
    setEditError("");
  }

  async function handleDeleteEntry(entryId) {
    if (deletingEntryId !== null || isUpdating) return;

    const shouldDelete = window.confirm(
      "Are you sure you want to delete this journal entry?",
    );

    if (!shouldDelete) return;

    if (
      token &&
      (accountEntries?.token !== token ||
        accountEntries.error ||
        !accountEntries.entries.some((entry) => entry.id === entryId))
    ) {
      setDeleteError("This account entry is unavailable. Please refresh.");
      return;
    }

    setDeleteError("");
    setDeletingEntryId(entryId);

    try {
      if (token) {
        await deleteJournalEntry(token, entryId);

        if (sessionStorage.getItem("lumaToken") !== token) return;

        setAccountEntries((current) =>
          current?.token === token
            ? {
                ...current,
                entries: current.entries.filter(
                  (entry) => entry.id !== entryId,
                ),
              }
            : current,
        );
      } else {
        setLocalEntries((currentEntries) =>
          currentEntries.filter((entry) => entry.id !== entryId),
        );
      }

      if (editingEntryId === entryId) {
        handleCancelEdit();
      }
    } catch (error) {
      setDeleteError(error.message || "Unable to delete your journal entry.");
    } finally {
      setDeletingEntryId(null);
    }
  }

  return (
    <main className="journal">
      <h1 className="journal__title">Creative Journal</h1>

      {token && accountEntries?.token !== token && (
        <p className="journal__account-status" role="status">
          Loading your journal…
        </p>
      )}

      {token &&
        accountEntries?.token === token &&
        (accountEntries.error ? (
          <p className="journal__error" role="alert">
            {accountEntries.error}
          </p>
        ) : (
          <p className="journal__account-status" role="status">
            Your account has {accountEntries.entries.length} saved journal
            entries.
          </p>
        ))}

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

        <label className="journal__label" htmlFor="entry-photo">
          Add a photo (optional, maximum 1 MB)
        </label>

        <input
          key={photoInputKey}
          className="journal__file-input"
          id="entry-photo"
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
          disabled={Boolean(token) || isCreating}
        />

        {token && <p>Account photo uploads are coming next.</p>}

        {photoError && <p className="journal__error">{photoError}</p>}

        {entryPhoto && (
          <img
            className="journal__photo-preview"
            src={entryPhoto}
            alt="Selected journal preview"
          />
        )}

        <button className="journal__button" type="submit" disabled={isCreating}>
          {isCreating ? "Saving…" : "Save Entry"}
        </button>
      </form>

      <section className="journal__entries">
        <h2 className="journal__entries-title">Your Entries</h2>

        {deleteError && (
          <p className="journal__error" role="alert">
            {deleteError}
          </p>
        )}

        {token && !accountEntriesReady ? null : entries.length === 0 ? (
          <p className="journal__empty">No journal entries yet.</p>
        ) : (
          <ul className="journal__list">
            {entries.map((entry) => (
              <li className="journal__entry" key={entry.id}>
                <p className="journal__entry-date">
                  {token
                    ? new Date(entry.createdAt).toLocaleDateString()
                    : entry.createdAt}
                </p>
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
                      {trips.find(
                        (trip) => String(trip.id) === String(entry.tripId),
                      )?.name || "Unknown trip"}
                    </Link>
                  </p>
                )}

                {entry.photo && editingEntryId !== entry.id && (
                  <img
                    className="journal__entry-photo"
                    src={entry.photo}
                    alt={`Journal entry: ${entry.title}`}
                  />
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

                    <label
                      className="journal__label"
                      htmlFor={`edit-photo-${entry.id}`}
                    >
                      Replace photo (optional, maximum 1 MB)
                    </label>

                    <input
                      className="journal__file-input"
                      id={`edit-photo-${entry.id}`}
                      type="file"
                      accept="image/*"
                      onChange={handleEditPhotoChange}
                      disabled={Boolean(token) || isUpdating}
                    />

                    {token && <p>Account photo uploads are coming next.</p>}

                    {editPhotoError && (
                      <p className="journal__error">{editPhotoError}</p>
                    )}

                    {editedPhoto && (
                      <img
                        className="journal__photo-preview"
                        src={editedPhoto}
                        alt={`Edited preview for ${editedTitle}`}
                      />
                    )}

                    {editedPhoto && (
                      <button
                        className="journal__remove-photo-button"
                        type="button"
                        onClick={() => {
                          setEditedPhoto("");
                          setEditPhotoError("");
                        }}
                      >
                        Remove Photo
                      </button>
                    )}

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
                    disabled={isUpdating}
                  >
                    {isUpdating ? "Saving…" : "Save"}
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
                    disabled={isUpdating}
                  >
                    Cancel
                  </button>
                )}

                <button
                  className="journal__delete-button"
                  type="button"
                  onClick={() => handleDeleteEntry(entry.id)}
                  disabled={deletingEntryId !== null || isUpdating}
                >
                  {deletingEntryId === entry.id ? "Deleting…" : "Delete"}
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

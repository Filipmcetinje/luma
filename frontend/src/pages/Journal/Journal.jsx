import { useEffect, useState } from "react";
import "./Journal.css";

function Journal() {
  const [entryTitle, setEntryTitle] = useState("");
  const [entryText, setEntryText] = useState("");
  const [entries, setEntries] = useState(() => {
    const savedEntries = localStorage.getItem("journalEntries");

    return savedEntries ? JSON.parse(savedEntries) : [];
  });

  const [formError, setFormError] = useState("");

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
      createdAt: new Date().toLocaleDateString(),
    };

    setEntries((currentEntries) => [newEntry, ...currentEntries]);
    setEntryTitle("");
    setEntryText("");
  }

  function handleDeleteEntry(entryId) {
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
                <h3 className="journal__entry-title">{entry.title}</h3>
                <p className="journal__entry-text">{entry.text}</p>
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

import { useEffect, useState } from "react";
import "./Trips.css";

function Trips() {
  const [tripName, setTripName] = useState("");
  const [trips, setTrips] = useState(() => {
    const savedTrips = localStorage.getItem("trips");

    return savedTrips ? JSON.parse(savedTrips) : [];
  });

  useEffect(() => {
    localStorage.setItem("trips", JSON.stringify(trips));
  }, [trips]);

  function handleTripNameChange(event) {
    setTripName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newTrip = {
      id: Date.now(),
      name: tripName,
    };

    setTrips([...trips, newTrip]);
    setTripName("");
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

        <button className="trips__button" type="submit">
          Create Trip
        </button>

        <p className="trips__preview">Current trip name: {tripName}</p>
      </form>

      <section className="trips__list">
        <h2 className="trips__list-title">Your Trips</h2>

        {trips.map((trip) => (
          <article className="trips__card" key={trip.id}>
            <h3 className="trips__card-title">{trip.name}</h3>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Trips;

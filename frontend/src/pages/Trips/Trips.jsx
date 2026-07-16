import { useEffect, useState } from "react";
import "./Trips.css";

function Trips() {
  const [tripName, setTripName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

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

    setTrips([...trips, newTrip]);
    setTripName("");
    setStartDate("");
    setEndDate("");
  }

  function handleDeleteTrip(tripId) {
    setTrips((currentTrips) =>
      currentTrips.filter((trip) => trip.id !== tripId),
    );
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

        {trips.map((trip) => (
          <article className="trips__card" key={trip.id}>
            <div className="trips__card-content">
              <h3 className="trips__card-title">{trip.name}</h3>

              <p className="trips__card-dates">
                {trip.startDate} – {trip.endDate}
              </p>
            </div>

            <button
              className="trips__delete-button"
              type="button"
              onClick={() => handleDeleteTrip(trip.id)}
            >
              Delete
            </button>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Trips;

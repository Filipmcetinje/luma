import { useParams } from "react-router-dom";
import PlaceCard from "../../components/PlaceCard/PlaceCard";
import places from "../../data/places";
import "./TripDetails.css";
import getTripStatus from "../../utils/getTripStatus";
import getDaysUntilTrip from "../../utils/getDaysUntilTrip";
import getTripProgress from "../../utils/getTripProgress";

function TripDetails({ trips, favoritePlaceIds, onToggleFavorite }) {
  const { tripId } = useParams();

  const trip = trips.find((trip) => trip.id === Number(tripId));

  if (!trip) {
    return (
      <main className="trip-details">
        <h1 className="trip-details__title">Trip not found</h1>
      </main>
    );
  }

  const placeCount = trip.places.length;

  const tripStatus = getTripStatus(trip.startDate, trip.endDate);

  const daysUntilTrip = getDaysUntilTrip(trip.startDate);

  const tripProgress = getTripProgress(trip.startDate, trip.endDate);

  return (
    <main className="trip-details">
      <h1 className="trip-details__title">{trip.name}</h1>

      <p className="trip-details__dates">
        {trip.startDate} – {trip.endDate}
      </p>

      <p
        className={`trip-details__status trip-details__status--${tripStatus.toLowerCase()}`}
      >
        {tripStatus}
      </p>

      {tripStatus === "Upcoming" && (
        <p className="trip-details__countdown">
          Starts in {daysUntilTrip} {daysUntilTrip === 1 ? "day" : "days"}
        </p>
      )}

      {tripStatus === "Active" && (
        <div className="trip-details__progress">
          <p className="trip-details__progress-text">
            {tripProgress}% complete
          </p>

          <progress
            className="trip-details__progress-bar"
            value={tripProgress}
            max="100"
          >
            {tripProgress}%
          </progress>
        </div>
      )}

      <p className="trip-details__count">
        {placeCount} {placeCount === 1 ? "place" : "places"}
      </p>

      <section className="trip-details__places">
        <h2 className="trip-details__places-title">Places</h2>

        {trip.places.length === 0 ? (
          <p className="trip-details__empty">
            No places added to this trip yet.
          </p>
        ) : (
          <ul className="trip-details__places-list">
            {trip.places.map((placeId) => {
              const place = places.find((place) => place.id === placeId);

              if (!place) {
                return null;
              }

              return (
                <li className="trip-details__place-item" key={placeId}>
                  <PlaceCard
                    place={place}
                    isFavorite={favoritePlaceIds.includes(place.id)}
                    onToggleFavorite={onToggleFavorite}
                  />
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </main>
  );
}

export default TripDetails;

import { Link, useParams } from "react-router-dom";
import places from "../../data/places";
import "../PlaceDetails/PlaceDetails.css";

function NearbyPlaceDetails() {
  const { placeId, nearbySlug } = useParams();

  const destination = places.find((place) => place.id === Number(placeId));

  const nearbyPlace = destination?.nearbyPlaces?.find(
    (place) => place.slug === nearbySlug,
  );

  if (!destination || !nearbyPlace) {
    return (
      <main className="place-details">
        <h1>Place not found</h1>
        <Link to="/discover">Back to Discover</Link>
      </main>
    );
  }

  return (
    <main className="place-details-page">
      <title>{`${nearbyPlace.title} | ${destination.title} | Luma`}</title>

      <div className="place-details">
        <Link to={`/places/${destination.id}`}>
          Back to {destination.title}
        </Link>

        {nearbyPlace.image && (
          <img
            className="place-details__image"
            src={nearbyPlace.image}
            alt={`${nearbyPlace.title}, ${destination.title}, Montenegro`}
          />
        )}

        <h1 className="place-details__title">{nearbyPlace.title}</h1>

        <p className="place-details__location">
          {destination.title}, Montenegro
        </p>
        <a
          className="place-details__map-link"
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            `${nearbyPlace.title}, ${destination.title}, Montenegro`,
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open in Google Maps
        </a>
        {nearbyPlace.description && (
          <p className="place-details__description">
            {nearbyPlace.description}
          </p>
        )}
      </div>
    </main>
  );
}

export default NearbyPlaceDetails;

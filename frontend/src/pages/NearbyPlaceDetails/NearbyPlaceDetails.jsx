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

        <h1 className="place-details__title">{nearbyPlace.title}</h1>

        <p className="place-details__location">
          {destination.title}, Montenegro
        </p>
      </div>
    </main>
  );
}

export default NearbyPlaceDetails;

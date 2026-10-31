import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import places from "../../data/places";
import "./NearbyPlaceDetails.css";
import "../PlaceDetails/PlaceDetails.css";

function NearbyPlaceDetails() {
  const { placeId, nearbySlug } = useParams();
  const [photoSelection, setPhotoSelection] = useState(null);

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

  const galleryImages =
    nearbyPlace.gallery ?? (nearbyPlace.image ? [nearbyPlace.image] : []);

  const selectedImage =
    photoSelection?.placeKey === `${placeId}/${nearbySlug}` &&
    galleryImages.includes(photoSelection.image)
      ? photoSelection.image
      : galleryImages[0];

  return (
    <main className="place-details-page">
      <title>{`${nearbyPlace.title}, ${destination.title}: Travel Guide | Luma`}</title>

      {nearbyPlace.description && (
        <meta name="description" content={nearbyPlace.description} />
      )}

      <div className="place-details nearby-place-details">
        <Link
          className="nearby-place-details__back"
          to={`/places/${destination.id}`}
        >
          ← Back to {destination.title}
        </Link>

        {selectedImage && (
          <img
            className="place-details__image"
            src={selectedImage}
            alt={`${nearbyPlace.title}, ${destination.title}, Montenegro`}
          />
        )}

        {galleryImages.length > 1 && (
          <div className="place-details__gallery">
            {galleryImages.map((image, index) => (
              <button
                className={`place-details__thumbnail-button ${
                  selectedImage === image
                    ? "place-details__thumbnail-button_active"
                    : ""
                }`}
                key={image}
                type="button"
                onClick={() =>
                  setPhotoSelection({
                    placeKey: `${placeId}/${nearbySlug}`,
                    image,
                  })
                }
                aria-label={`Show ${nearbyPlace.title} photo ${index + 1}`}
                aria-pressed={selectedImage === image}
              >
                <img
                  className="place-details__thumbnail"
                  src={image}
                  alt=""
                  loading="lazy"
                />
              </button>
            ))}
          </div>
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

        {nearbyPlace.websiteUrl && (
          <a
            className="place-details__map-link"
            href={nearbyPlace.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {nearbyPlace.websiteLabel}
          </a>
        )}

        {nearbyPlace.stayUrl && (
          <Link className="place-details__map-link" to={nearbyPlace.stayUrl}>
            {nearbyPlace.stayLabel}
          </Link>
        )}

        {nearbyPlace.stayAdvice && (
          <section className="place-details__trip-section">
            <h2 className="place-details__trip-title">
              Staying in {nearbyPlace.title}
            </h2>

            <p className="place-details__description">
              {nearbyPlace.stayAdvice}
            </p>
          </section>
        )}

        {nearbyPlace.transportAdvice && (
          <section className="place-details__trip-section">
            <h2 className="place-details__trip-title">
              Getting around {nearbyPlace.title}
            </h2>

            <p className="place-details__description">
              {nearbyPlace.transportAdvice}
            </p>

            {nearbyPlace.transportLinks?.map((link) => (
              <a
                className="place-details__map-link"
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </section>
        )}

        {nearbyPlace.accommodationOptions?.length > 0 && (
          <section className="place-details__trip-section">
            <h2 className="place-details__trip-title">Accommodation options</h2>

            <p>
              Explore property details and check current prices and
              availability.
            </p>

            <ul className="nearby-place-details__accommodations">
              {nearbyPlace.accommodationOptions.map((option) => (
                <li key={option.url}>
                  <a
                    href={option.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>{option.name}</strong>

                    {option.description && <p>{option.description}</p>}

                    <span>View property details →</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </main>
  );
}

export default NearbyPlaceDetails;

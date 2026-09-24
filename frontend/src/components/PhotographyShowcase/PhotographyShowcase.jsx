import { Link } from "react-router-dom";
import places from "../../data/places";
import "./PhotographyShowcase.css";

const featuredPhotos = [
  { placeId: 1, photoIndex: 1 },
  { placeId: 2, photoIndex: 0 },
  { placeId: 4, photoIndex: 1 },
  { placeId: 6, photoIndex: 2 },
];

function PhotographyShowcase() {
  return (
    <section className="photography-showcase">
      <h2 className="photography-showcase__title">
        Montenegro Through My Lens
      </h2>

      <div className="photography-showcase__grid">
        {featuredPhotos.map(({ placeId, photoIndex }) => {
          const place = places.find((item) => item.id === placeId);

          return (
            <Link
              className="photography-showcase__photo"
              key={`${placeId}-${photoIndex}`}
              to={`/places/${placeId}`}
              aria-label={`Explore ${place.title}`}
            >
              <img
                src={place.gallery[photoIndex]}
                alt={`${place.title}, photographed by Filip Milosevic`}
                loading="lazy"
              />
              <span>{place.title}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default PhotographyShowcase;

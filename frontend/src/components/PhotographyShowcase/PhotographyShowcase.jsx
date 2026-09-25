import { useRef, useState } from "react";
import heroImage from "../../assets/hero/montenegro-hero.jpg";
import "./PhotographyShowcase.css";

const photos = [
  {
    title: "Montenegro Landscape",
    image:
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/montenegro-landscape.jpg",
  },
  {
    title: "Montenegro Landscape II",
    image:
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/montenegro-landscape2.jpg",
  },
  {
    title: "My Pool",
    image:
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/mypool.jpg",
  },

  {
    title: "Bay Entrance",
    image:
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/bay-enter.jpg",
  },
  {
    title: "Montenegro",
    image: heroImage,
  },
  {
    title: "Coastal Plants",
    image:
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/plant.jpg",
  },
];

function PhotographyShowcase() {
  const dialogRef = useRef(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  function openPhoto(photo) {
    setSelectedPhoto(photo);
    dialogRef.current.showModal();
  }

  function closePhoto() {
    dialogRef.current.close();
  }

  return (
    <section className="photography-showcase">
      <h2 className="photography-showcase__title">
        Montenegro Through My Lens
      </h2>

      <div className="photography-showcase__grid">
        {photos.map((photo) => (
          <figure className="photography-showcase__photo" key={photo.title}>
            <button
              className="photography-showcase__open"
              type="button"
              onClick={() => openPhoto(photo)}
              aria-label={`View larger photo: ${photo.title}`}
            >
              <img
                src={photo.image}
                alt={`${photo.title}, photographed by Filip Milosevic`}
                loading="lazy"
              />
            </button>
            <figcaption>{photo.title}</figcaption>
          </figure>
        ))}
      </div>

      <dialog
        className="photography-showcase__dialog"
        ref={dialogRef}
        aria-label={selectedPhoto?.title || "Photo viewer"}
      >
        <button
          className="photography-showcase__close"
          type="button"
          onClick={closePhoto}
          aria-label="Close photo viewer"
        >
          ×
        </button>

        {selectedPhoto && (
          <img
            src={selectedPhoto.image}
            alt={`${selectedPhoto.title}, photographed by Filip Milosevic`}
          />
        )}
      </dialog>
    </section>
  );
}

export default PhotographyShowcase;

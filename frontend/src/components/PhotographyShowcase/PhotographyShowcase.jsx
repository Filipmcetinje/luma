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
    title: "Coastal view from Platamuni",
    visitNote:
      "Platamuni is a protected stretch of Montenegro’s Adriatic coast near Ploče Beach (Plaža Ploče).",
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
    title: "Coastal Plants",
    image:
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/plant.jpg",
  },
  {
    title: "Scadar Lake",
    image:
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/scadar-lake.jpg",
  },
  {
    title: "Lighthouse seen from Platamuni",
    visitNote:
      "Photographed from Platamuni, a protected stretch of Montenegro’s Adriatic coast near Ploče Beach (Plaža Ploče).",
    image: heroImage,
  },
  {
    title: "Bay of Kotor (Boka Bay) from Lovćen",
    visitNote: "Photographed from Lovćen, looking out over the Bay of Kotor.",
    image:
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/bay.png",
  },
  {
    title: "Landscape",
    image:
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/landscape.jpg",
  },
  {
    title: "Adriatic Sunset from Lovćen",
    visitNote: "Looking out over the Adriatic Sea at sunset from Lovćen.",
    image:
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/view.png",
  },
  {
    title: "Štirovnik from Jezerski Vrh",
    visitNote:
      "Lovćen’s highest peak (1,749 m), photographed from the Njegoš Mausoleum on Jezerski Vrh.",
    image:
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/lovcen-national-park.jpg",
  },
  {
    title: "budva sunset",
    image:
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/budva-2.jpg",
  },
  {
    title: "Rijeka Crnojevica",
    image:
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/rijeka-crnijevica-3.png",
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
            <figcaption>
              {photo.title}
              {photo.visitNote && <p>{photo.visitNote}</p>}
            </figcaption>
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

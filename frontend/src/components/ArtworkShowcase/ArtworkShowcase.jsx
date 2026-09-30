import { useRef, useState } from "react";
import "./ArtworkShowcase.css";

const artworks = [
  {
    title: "Grass",
    image:
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1200/grass.webp",
    description: "Green and yellow painting by Filip Milosevic",
  },
  {
    title: "Grass II",
    image:
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1200/grass2.jpg",
    description: "Colorful abstract painting by Filip Milosevic",
  },
  {
    title: "Smile",
    image:
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1200/smile.webp",
    description:
      "An expressive painting with a warm orange figure surrounded by blue and green brushstrokes, by Filip Milosevic.",
  },
  {
    title: "Grass III",
    image:
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1200/grass3.webp",
    description:
      "Pink flowers among textured green and yellow brushstrokes, painted by Filip Milosevic.",
  },
];

function ArtworkShowcase() {
  const dialogRef = useRef(null);
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  function openArtwork(artwork) {
    setSelectedArtwork(artwork);
    dialogRef.current.showModal();
  }

  function closeArtwork() {
    dialogRef.current.close();
  }

  return (
    <section className="artwork-showcase">
      <h2 className="artwork-showcase__title">Art Inspired by Montenegro</h2>

      <div className="artwork-showcase__grid">
        {artworks.map((artwork) => (
          <figure className="artwork-showcase__piece" key={artwork.title}>
            <button
              className="artwork-showcase__open"
              type="button"
              onClick={() => openArtwork(artwork)}
              aria-label={`View larger artwork: ${artwork.title}`}
            >
              <img
                src={artwork.image}
                alt={artwork.description}
                loading="lazy"
              />
            </button>
            <figcaption>{artwork.title}</figcaption>
          </figure>
        ))}
      </div>

      <dialog
        className="artwork-showcase__dialog"
        ref={dialogRef}
        aria-label={selectedArtwork?.title || "Artwork viewer"}
      >
        <button
          className="artwork-showcase__close"
          type="button"
          onClick={closeArtwork}
          aria-label="Close artwork viewer"
        >
          ×
        </button>

        {selectedArtwork && (
          <>
            <img
              src={selectedArtwork.image}
              alt={selectedArtwork.description}
            />
            <h3>{selectedArtwork.title}</h3>
            <p>{selectedArtwork.description}</p>
          </>
        )}
      </dialog>
    </section>
  );
}

export default ArtworkShowcase;

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
  {
    title: "Wild Pomegranate Flower",
    image:
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1200/wild-pomegranate-flower.jpg",
    description:
      "Red wild pomegranate flowers against textured green and blue brushstrokes, painted by Filip Milosevic.",
  },
  {
    title: "Wild Pomegranate",
    image:
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1200/wild-pomegranate.jpg",
    description:
      "An expressive painting with golden yellow, purple, and green brushstrokes, by Filip Milosevic.",
  },
  {
    title: "Abstract",
    image:
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1200/abstract.jpg",
    description:
      "An abstract painting with curved gray, white, and blue forms and a yellow-green accent, by Filip Milosevic.",
  },
  {
    title: "Leaves",
    image:
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1200/leaves.jpg",
    description:
      "Layers of green and yellow leaves painted with expressive brushstrokes, by Filip Milosevic.",
  },
  {
    title: "Self-Portrait",
    image:
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1200/self-portret_copy.jpg",
    description:
      "An abstract self-portrait with textured gray forms and red, yellow, and green accents, by Filip Milosevic.",
  },
  {
    title: "Composition",
    image:
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1200/composition.jpg",
    description:
      "An abstract composition with flowing red, yellow, blue, and purple forms against a dark background, by Filip Milosevic.",
  },
];

function ArtworkShowcase({ limit }) {
  const displayedArtworks = limit ? artworks.slice(0, limit) : artworks;
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
        {displayedArtworks.map((artwork) => (
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

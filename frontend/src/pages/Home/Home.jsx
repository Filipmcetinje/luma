import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import Hero from "../../components/Hero/Hero";
import places from "../../data/places";
import selfPortrait from "../../assets/artwork/self-portrait.jpg";
import "./Home.css";

const landscapeImage =
  "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1200/montenegro-landscape.jpg";

const artworkImage =
  "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_900/grass.jpg";

function getCardImageUrl(url, width) {
  return url.replace(/w_\d+/, `w_${width}`);
}

const featuredDestinations = [
  {
    id: 1,
    summary: "Old Town stories, waterfront villages, and life around the bay.",
  },
  {
    id: 6,
    summary: "Beaches, coastal walks, and places to stay along the Riviera.",
  },
  {
    id: 4,
    summary: "Royal history, art, and journeys into the surrounding landscape.",
  },
]
  .map((destination) => {
    const place = places.find((place) => place.id === destination.id);

    return place ? { ...place, summary: destination.summary } : null;
  })
  .filter(Boolean);

function Home() {
  const imageDialogRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  function openImage(image) {
    setSelectedImage(image);
    imageDialogRef.current.showModal();
  }

  function closeImage() {
    imageDialogRef.current.close();
  }

  function openLandscape() {
    openImage({
      src: landscapeImage,
      alt: "Montenegro landscape photographed by Filip Milosevic",
      caption: "Montenegro · Through my lens",
    });
  }

  return (
    <main className="home">
      <title>Luma | Travel, Art &amp; Inspiration</title>

      <meta
        name="description"
        content="Discover Montenegro through local travel guides, photography, and art. Explore places to stay, transport options, and tools to organize your trip."
      />
      <Hero />

      <div className="home__creative-background">
        <div className="home__container">
          <section className="home__intro" aria-labelledby="home-intro-title">
            <div>
              <p className="home__eyebrow">A personal invitation</p>

              <h2 className="home__heading" id="home-intro-title">
                Places that inspire.
                <br />
                Stories worth discovering.
              </h2>
            </div>

            <div>
              <p className="home__text">
                Hi, I’m Filip. I created Luma to share places where mountains
                meet the sea, old towns hold centuries of stories, and art is
                part of everyday life. Starting with Montenegro, I’m bringing
                together local guides, photography, and practical details to
                help you plan your trip.
              </p>

              <p className="home__signature">Filip Milosevic</p>
            </div>
          </section>

          <section
            className="home__destinations"
            aria-labelledby="home-destinations-title"
          >
            <div className="home__section-header">
              <div>
                <p className="home__eyebrow">Start with Montenegro</p>

                <h2 className="home__heading" id="home-destinations-title">
                  Find your kind of journey.
                </h2>

                <p className="home__section-description">
                  Explore the places, then plan your stay.
                </p>
              </div>

              <Link className="home__text-link" to="/discover">
                All destinations ↗
              </Link>
            </div>

            <div className="home__destinations-grid">
              {featuredDestinations.map((place) => (
                <Link
                  className="home__destination"
                  to={`/places/${place.id}`}
                  key={place.id}
                >
                  <img
                    className="home__destination-image"
                    src={getCardImageUrl(place.image, 800)}
                    srcSet={`
    ${getCardImageUrl(place.image, 400)} 400w,
    ${getCardImageUrl(place.image, 800)} 800w,
    ${getCardImageUrl(place.image, 1200)} 1200w
  `}
                    sizes="(max-width: 700px) calc(100vw - 48px),
         (max-width: 1148px) calc((100vw - 96px) / 3),
         350px"
                    alt={place.title}
                    loading="lazy"
                  />

                  <h3>{place.title}</h3>
                  <p>{place.summary}</p>
                  <span>Explore {place.title} →</span>
                </Link>
              ))}
            </div>
          </section>

          <section className="home__tools" aria-label="Your travel tools">
            <Link className="home__tool" to="/favorites">
              <h3>Keep what inspires you</h3>
              <p>Save the places you want to explore.</p>
            </Link>

            <Link className="home__tool" to="/trips">
              <h3>Bring your trip together</h3>
              <p>Organize your dates and places in one trip.</p>
            </Link>

            <Link className="home__tool" to="/journal">
              <h3>Remember your journey</h3>
              <p>Keep your notes and photos in a travel journal.</p>
            </Link>
          </section>

          <section
            className="home__photography"
            aria-labelledby="home-photography-title"
          >
            <button
              className="home__image-button"
              type="button"
              onClick={openLandscape}
              aria-label="View Montenegro landscape larger"
            >
              <img
                className="home__landscape-image"
                src={landscapeImage}
                alt="Mountain landscape overlooking the water in Montenegro"
                loading="lazy"
              />
            </button>

            <div>
              <p className="home__eyebrow">Through my lens</p>

              <h2 className="home__heading" id="home-photography-title">
                A different way of seeing a place.
              </h2>

              <p className="home__text">
                Light on the water, a mountain path, a moment beside the sea. My
                photographs share the details that make me stop and look.
              </p>

              <Link className="home__text-link" to="/photography">
                Explore my photography ↗
              </Link>
            </div>
          </section>

          <section className="home__artist" aria-labelledby="home-artist-title">
            <div>
              <p className="home__eyebrow">Art &amp; the artist</p>

              <h2 className="home__heading" id="home-artist-title">
                Inspired by what surrounds us.
              </h2>

              <p className="home__text">
                I’m Filip Milosevic, an artist and software developer. Luma
                brings together my paintings, photographs, and the places that
                inspire them.
              </p>

              <div className="home__artist-links">
                <Link className="home__text-link" to="/art">
                  Explore my artwork ↗
                </Link>

                <button
                  className="home__text-link"
                  type="button"
                  onClick={() =>
                    openImage({
                      src: selfPortrait,
                      alt: "Self-portrait artwork by Filip Milosevic",
                      caption: "Self-portrait · Filip Milosevic",
                    })
                  }
                >
                  View self-portrait ↗
                </button>
              </div>
            </div>

            <button
              className="home__image-button"
              type="button"
              onClick={() =>
                openImage({
                  src: artworkImage,
                  alt: "Grass, a painting by Filip Milosevic",
                  caption: "Grass · Filip Milosevic",
                })
              }
              aria-label="View Grass painting larger"
            >
              <img
                className="home__artwork-image"
                src={artworkImage}
                alt="Grass, a painting by Filip Milosevic"
                loading="lazy"
              />
            </button>
          </section>
        </div>
      </div>

      <dialog
        className="home__image-dialog"
        ref={imageDialogRef}
        aria-label={selectedImage?.caption || "Image viewer"}
      >
        <button
          className="home__dialog-close"
          type="button"
          onClick={closeImage}
        >
          Close ×
        </button>

        {selectedImage && (
          <figure className="home__dialog-figure">
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <figcaption>{selectedImage.caption}</figcaption>
          </figure>
        )}
      </dialog>
    </main>
  );
}

export default Home;

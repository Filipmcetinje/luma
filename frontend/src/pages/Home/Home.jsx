import { useRef } from "react";
import { Link } from "react-router-dom";
import places from "../../data/places";

import Hero from "../../components/Hero/Hero";
import PhotographyShowcase from "../../components/PhotographyShowcase/PhotographyShowcase";
import ArtworkShowcase from "../../components/ArtworkShowcase/ArtworkShowcase";
import selfPortrait from "../../assets/artwork/self-portrait.jpg";
import "./Home.css";

const featuredDestinations = [
  {
    id: 1,
    summary: "Explore the Old Town, bay villages, and places to stay.",
  },
  {
    id: 6,
    summary: "Discover beaches, coastal towns, and seaside accommodation.",
  },
  {
    id: 4,
    summary: "Discover royal history, mountain villages, and nearby sights.",
  },
]
  .map((destination) => {
    const place = places.find((place) => place.id === destination.id);

    return place ? { ...place, summary: destination.summary } : null;
  })
  .filter(Boolean);

function Home() {
  const portraitDialogRef = useRef(null);

  function openPortrait() {
    portraitDialogRef.current.showModal();
  }

  function closePortrait() {
    portraitDialogRef.current.close();
  }

  return (
    <main>
      <Hero />

      <div className="home__creative-background">
        <section className="home__planning">
          <h2 className="home__planning-title">
            Places that inspire, stories worth discovering.
          </h2>

          <p className="home__planning-intro">
            Hi, I’m Filip. I created Luma to introduce you to places where
            mountains meet the sea, old towns hold centuries of stories, and art
            is woven into everyday life. Starting with Montenegro, I want to
            share the landscapes, history, and culture that inspire me, and help
            you discover new places and plan your trip.
          </p>
        </section>

        <section
          className="home__destinations"
          aria-labelledby="home-destinations-title"
        >
          <h2 className="home__destinations-title" id="home-destinations-title">
            Explore Montenegro
          </h2>

          <div className="home__destinations-grid">
            {featuredDestinations.map((place) => (
              <Link
                className="home__destination"
                to={`/places/${place.id}`}
                key={place.id}
              >
                <img
                  className="home__destination-image"
                  src={place.image}
                  alt={place.title}
                  loading="lazy"
                />

                <div className="home__destination-content">
                  <h3>{place.title}</h3>
                  <p>{place.summary}</p>
                  <span>Explore {place.title} →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <PhotographyShowcase />
        <ArtworkShowcase limit={4} />

        <section className="home__about-section">
          <div className="home__about">
            <button
              className="home__about-image-button"
              type="button"
              onClick={openPortrait}
              aria-label="View self-portrait larger"
            >
              <img
                className="home__about-image"
                src={selfPortrait}
                alt="Self-portrait artwork by Filip Milosevic"
              />
            </button>

            <div className="home__about-content">
              <h2 className="home__about-title">About the Artist</h2>

              <p className="home__about-text">
                I’m Filip Milosevic, an artist and software developer. Through
                Luma, I share the beauty of Montenegro—the places, light, and
                landscapes that inspire my artwork.
              </p>
            </div>
          </div>
        </section>
      </div>

      <dialog
        className="home__portrait-dialog"
        ref={portraitDialogRef}
        aria-label="Self-portrait viewer"
      >
        <button
          className="home__portrait-close"
          type="button"
          onClick={closePortrait}
          aria-label="Close self-portrait viewer"
        >
          ×
        </button>
        <img
          src={selfPortrait}
          alt="Self-portrait artwork by Filip Milosevic"
        />
      </dialog>
    </main>
  );
}

export default Home;

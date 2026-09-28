import { useRef } from "react";
import Hero from "../../components/Hero/Hero";
import PhotographyShowcase from "../../components/PhotographyShowcase/PhotographyShowcase";
import ArtworkShowcase from "../../components/ArtworkShowcase/ArtworkShowcase";
import selfPortrait from "../../assets/artwork/self-portrait.jpg";
import "./Home.css";

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
        <PhotographyShowcase />
        <ArtworkShowcase />

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
                I’m Filip Milosevic, an artist and software developer. I created
                Luma to connect travel in Montenegro with photography, painting,
                and creative inspiration.
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

import Hero from "../../components/Hero/Hero";
import selfPortrait from "../../assets/artwork/self-portrait.jpg";
import "./Home.css";
import PhotographyShowcase from "../../components/PhotographyShowcase/PhotographyShowcase";

function Home() {
  return (
    <main>
      <Hero />
      <PhotographyShowcase />

      <section className="home__about">
        <img
          className="home__about-image"
          src={selfPortrait}
          alt="Self-portrait artwork by Filip Milosevic"
        />

        <div className="home__about-content">
          <h2 className="home__about-title">About the Artist</h2>

          <p className="home__about-text">
            I’m Filip Milosevic, an artist and software developer. I created
            Luma to connect travel in Montenegro with photography, painting, and
            creative inspiration.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home;

import { Link } from "react-router-dom";
import "./Hero.css";

const heroImage =
  "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_2000/lighthouse-hero-background.png";

const lighthouseImage =
  "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_900/lighthouse-cutout.png";

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.20),
          rgba(0, 0, 0, 0.20)
        ), url(${heroImage})`,
      }}
    >
      <h1 className="hero__title">Discover the world through creativity.</h1>

      <p className="hero__text">
        Find inspiring places, save your favorites, plan your trip, and capture
        your memories in a travel journal.
      </p>

      <Link className="hero__button" to="/discover">
        Start Exploring
      </Link>

      <img
        className="hero__lighthouse"
        src={lighthouseImage}
        alt=""
        aria-hidden="true"
      />
    </section>
  );
}

export default Hero;

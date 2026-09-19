import { Link } from "react-router-dom";
import "./Hero.css";
import heroImage from "../../assets/hero/montenegro-hero.jpg";

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(
      rgba(0, 0, 0, 0.45),
      rgba(0, 0, 0, 0.45)
    ), url(${heroImage})`,
      }}
    >
      <h1 className="hero__title">Discover the world through creativity.</h1>

      <p className="hero__text">
        Explore inspiring places, plan meaningful journeys, and capture every
        creative moment.
      </p>

      <Link className="hero__button" to="/discover">
        Start Exploring
      </Link>
    </section>
  );
}

export default Hero;

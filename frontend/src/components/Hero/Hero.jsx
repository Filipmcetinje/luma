import { Link } from "react-router-dom";
import "./Hero.css";

const heroImage =
  "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_2000/ligt-house.jpg";

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(
          90deg,
          rgba(20, 44, 60, 0.72),
          rgba(20, 44, 60, 0.10)
        ), url(${heroImage})`,
      }}
    >
      <div className="hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">Travel · Art · Inspiration</p>

          <h1 className="hero__title">
            Discover the world through creativity.
          </h1>

          <p className="hero__text">
            Find places that inspire you, choose where to stay, and bring your
            next journey together.
          </p>

          <Link className="hero__button" to="/discover">
            Start exploring →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;

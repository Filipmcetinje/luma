import { Link } from "react-router-dom";

import "./Hero.css";

const heroImage =
  "https://res.cloudinary.com/kneu7ajr/image/upload/f_webp,q_70,w_1600/ligt-house.jpg";

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
            Discover Montenegro through a local lens.
          </h1>

          <p className="hero__text">
            Explore Montenegro through my photographs and travel guides. Find
            out where to stay and how to get around, then save the places you
            want to visit to your trip.
          </p>

          <Link className="hero__button" to="/discover">
            Explore Montenegro →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;

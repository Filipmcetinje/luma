import { Link } from "react-router-dom";
import ArtworkShowcase from "../../components/ArtworkShowcase/ArtworkShowcase";
import "./Art.css";

function Art() {
  return (
    <main className="art-page">
      <title>Artwork by Filip Milosevic | Luma</title>

      <meta
        name="description"
        content="Explore original paintings by Filip Milosevic, inspired by Montenegro’s landscapes, light, and nature."
      />
      <div className="art-page__navigation">
        <Link className="art-page__back" to="/">
          ← Back to Home
        </Link>
      </div>

      <ArtworkShowcase />
    </main>
  );
}

export default Art;

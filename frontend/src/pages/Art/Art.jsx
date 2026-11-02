import { Link } from "react-router-dom";
import ArtworkShowcase from "../../components/ArtworkShowcase/ArtworkShowcase";
import "./Art.css";

function Art() {
  return (
    <main className="art-page">
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

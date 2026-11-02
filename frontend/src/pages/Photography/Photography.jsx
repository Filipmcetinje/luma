import { Link } from "react-router-dom";
import PhotographyShowcase from "../../components/PhotographyShowcase/PhotographyShowcase";
import "./Photography.css";

function Photography() {
  return (
    <main className="photography-page">
      <title>Montenegro Photography | Luma</title>

      <meta
        name="description"
        content="Explore Montenegro through photographs by Filip Milosevic, from coastal landscapes to mountain views."
      />

      <div className="photography-page__navigation">
        <Link className="photography-page__back" to="/">
          ← Back to Home
        </Link>
      </div>

      <PhotographyShowcase />
    </main>
  );
}

export default Photography;

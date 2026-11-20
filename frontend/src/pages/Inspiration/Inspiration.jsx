import StoryNavigation from "../../components/StoryNavigation/StoryNavigation";

import "./Inspiration.css";

function Inspiration() {
  return (
    <>
      <StoryNavigation />

      <main className="inspiration">
        <p className="inspiration__eyebrow">Montenegro Through Other Eyes</p>

        <h1 className="inspiration__title">
          A country seen by artists and writers.
        </h1>

        <p className="inspiration__intro">
          Explore historical artwork and words inspired by Montenegro.
        </p>
      </main>
    </>
  );
}

export default Inspiration;

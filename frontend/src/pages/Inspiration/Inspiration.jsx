import StoryNavigation from "../../components/StoryNavigation/StoryNavigation";
import inspirationItems from "../../data/inspirationItems";

import "./Inspiration.css";

function Inspiration() {
  return (
    <>
      <StoryNavigation />

      <main className="inspiration">
        <header className="inspiration__header">
          <p className="inspiration__eyebrow">Montenegro Through Other Eyes</p>

          <h1 className="inspiration__title">
            A country seen by artists and writers.
          </h1>

          <p className="inspiration__intro">
            Explore historical artwork and words inspired by Montenegro.
          </p>
        </header>

        <section
          className="inspiration__collection"
          aria-label="Words inspired by Montenegro"
        >
          {inspirationItems.map((item) => (
            <article className="inspiration__quote-card" key={item.id}>
              <p className="inspiration__type">{item.type}</p>

              <blockquote className="inspiration__quote">
                “{item.quote}”
              </blockquote>

              <p className="inspiration__attribution">— {item.attribution}</p>

              <p className="inspiration__description">{item.description}</p>

              <a
                className="inspiration__source"
                href={item.sourceUrl}
                target="_blank"
                rel="noreferrer"
              >
                {item.sourceLabel} ↗
              </a>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}

export default Inspiration;

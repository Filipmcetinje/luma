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

          <h1 className="inspiration__title">The land shapes the people.</h1>

          <p className="inspiration__intro">
            Montenegro has inspired artists and writers for centuries. Some
            captured its mountains and sea. Others portrayed the strength and
            independence of the people who lived among them.
          </p>
        </header>

        <div className="inspiration__section-heading">
          <p className="inspiration__section-number">01</p>

          <div>
            <p className="inspiration__section-label">The Land</p>

            <h2 className="inspiration__section-title">
              Where mountains meet the sea.
            </h2>
          </div>
        </div>

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

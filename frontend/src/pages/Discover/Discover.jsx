import "./Discover.css";
import PlaceCard from "../../components/PlaceCard/PlaceCard";

const places = [
  {
    id: 1,
    title: "Kotor Fortress",
    location: "Kotor",
    category: "Mountain",
  },
  {
    id: 2,
    title: "Perast",
    location: "Bay of Kotor",
    category: "Coast",
  },
  {
    id: 3,
    title: "Lovćen National Park",
    location: "Cetinje",
    category: "Nature",
  },
];

function Discover() {
  return (
    <main className="discover">
      <section className="discover__intro">
        <h1 className="discover__title">Discover Montenegro</h1>

        <p className="discover__text">
          Find inspiring places for painting, photography, writing, and creative
          travel.
        </p>
      </section>

      <section className="discover__places">
        {places.map((place) => (
          <PlaceCard
            key={place.id}
            title={place.title}
            location={place.location}
            category={place.category}
          />
        ))}
      </section>
    </main>
  );
}

export default Discover;

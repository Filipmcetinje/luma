import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Discover from "./pages/Discover/Discover";
import Trips from "./pages/Trips/Trips";
import Journal from "./pages/Journal/Journal";
import PlaceDetails from "./pages/PlaceDetails/PlaceDetails";
import Favorites from "./pages/Favorites/Favorites";
import places from "./data/places";

function App() {
  const [favoritePlaceIds, setFavoritePlaceIds] = useState([]);

  function handleToggleFavorite(placeId) {
    if (favoritePlaceIds.includes(placeId)) {
      setFavoritePlaceIds(favoritePlaceIds.filter((id) => id !== placeId));
    } else {
      setFavoritePlaceIds([...favoritePlaceIds, placeId]);
    }
  }
  const favoritePlaces = places.filter((place) =>
    favoritePlaceIds.includes(place.id),
  );

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/discover"
          element={
            <Discover
              favoritePlaceIds={favoritePlaceIds}
              onToggleFavorite={handleToggleFavorite}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              favoritePlaces={favoritePlaces}
              favoritePlaceIds={favoritePlaceIds}
              onToggleFavorite={handleToggleFavorite}
            />
          }
        />
        <Route path="/trips" element={<Trips />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/places/:placeId" element={<PlaceDetails />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

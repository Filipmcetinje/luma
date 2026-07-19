import { useEffect, useState } from "react";
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
import TripDetails from "./pages/TripDetails/TripDetails";

function App() {
  const [favoritePlaceIds, setFavoritePlaceIds] = useState(() => {
    const savedFavorites = localStorage.getItem("favoritePlaceIds");

    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const [trips, setTrips] = useState(() => {
    const savedTrips = localStorage.getItem("trips");

    return savedTrips ? JSON.parse(savedTrips) : [];
  });

  useEffect(() => {
    localStorage.setItem("trips", JSON.stringify(trips));
  }, [trips]);

  useEffect(() => {
    localStorage.setItem("favoritePlaceIds", JSON.stringify(favoritePlaceIds));
  }, [favoritePlaceIds]);

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

  function handleCreateTrip(newTrip) {
    setTrips((currentTrips) => [...currentTrips, newTrip]);
  }

  function handleDeleteTrip(tripId) {
    setTrips((currentTrips) =>
      currentTrips.filter((trip) => trip.id !== tripId),
    );
  }

  function handleAddPlaceToTrip(tripId, placeId) {
    setTrips((currentTrips) =>
      currentTrips.map((trip) => {
        if (trip.id !== Number(tripId)) {
          return trip;
        }

        if (trip.places.includes(placeId)) {
          return trip;
        }

        return {
          ...trip,
          places: [...trip.places, placeId],
        };
      }),
    );
  }

  function handleRemovePlaceFromTrip(tripId, placeId) {
    setTrips((currentTrips) =>
      currentTrips.map((trip) => {
        if (trip.id !== tripId) {
          return trip;
        }

        return {
          ...trip,
          places: trip.places.filter((id) => id !== placeId),
        };
      }),
    );
  }

  function handleUpdateTrip(tripId, newName) {
    setTrips((currentTrips) =>
      currentTrips.map((trip) => {
        if (trip.id !== tripId) {
          return trip;
        }

        return {
          ...trip,
          name: newName,
        };
      }),
    );
  }

  return (
    <>
      <Header favoriteCount={favoritePlaceIds.length} />

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
        <Route
          path="/trips"
          element={
            <Trips
              trips={trips}
              onCreateTrip={handleCreateTrip}
              onDeleteTrip={handleDeleteTrip}
              onRemovePlaceFromTrip={handleRemovePlaceFromTrip}
              onUpdateTrip={handleUpdateTrip}
            />
          }
        />
        <Route
          path="/trips/:tripId"
          element={
            <TripDetails
              trips={trips}
              favoritePlaceIds={favoritePlaceIds}
              onToggleFavorite={handleToggleFavorite}
            />
          }
        />
        <Route path="/journal" element={<Journal />} />
        <Route
          path="/places/:placeId"
          element={
            <PlaceDetails
              trips={trips}
              onAddPlaceToTrip={handleAddPlaceToTrip}
            />
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

import { useEffect, useRef, useState } from "react";
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
import Art from "./pages/Art/Art";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import {
  checkBackendHealth,
  getCurrentUser,
  getFavorites,
  addFavorite,
  removeFavorite,
} from "./utils/api";

function App() {
  const [auth, setAuth] = useState(null);
  const [accountFavorites, setAccountFavorites] = useState(null);
  const accountToken = auth?.token ?? null;
  const favoriteSaveInProgress = useRef(false);
  const [favoriteSave, setFavoriteSave] = useState(null);

  function handleLogin(loginResult) {
    sessionStorage.setItem("lumaToken", loginResult.token);
    setAuth(loginResult);
  }

  function handleLogout() {
    sessionStorage.removeItem("lumaToken");
    setAuth(null);
  }

  useEffect(() => {
    const token = sessionStorage.getItem("lumaToken");

    if (!token) return;

    let cancelled = false;

    getCurrentUser(token)
      .then(({ user }) => {
        if (!cancelled && sessionStorage.getItem("lumaToken") === token) {
          setAuth({ token, user });
        }
      })
      .catch((error) => {
        if (cancelled || sessionStorage.getItem("lumaToken") !== token) {
          return;
        }

        if (error.status === 401) {
          sessionStorage.removeItem("lumaToken");
        } else {
          console.error("Unable to restore login:", error.message);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    checkBackendHealth()
      .then((data) => {
        console.log("Luma backend connected:", data);
      })
      .catch((error) => {
        console.error("Luma backend connection failed:", error);
      });
  }, []);

  useEffect(() => {
    if (!accountToken) return;

    let cancelled = false;

    getFavorites(accountToken)
      .then(({ favoritePlaceIds }) => {
        if (!cancelled) {
          setAccountFavorites({
            token: accountToken,
            ids: favoritePlaceIds,
            error: "",
          });
        }
      })
      .catch((error) => {
        if (!cancelled) {
          setAccountFavorites({
            token: accountToken,
            ids: [],
            error: error.message || "Unable to load favorites.",
          });
        }
      });

    return () => {
      cancelled = true;
    };
  }, [accountToken]);

  const [localFavoritePlaceIds, setLocalFavoritePlaceIds] = useState(() => {
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
    localStorage.setItem(
      "favoritePlaceIds",
      JSON.stringify(localFavoritePlaceIds),
    );
  }, [localFavoritePlaceIds]);

  const accountFavoritesReady =
    accountToken !== null && accountFavorites?.token === accountToken;

  const favoritePlaceIds = accountToken
    ? accountFavoritesReady
      ? accountFavorites.ids
      : []
    : localFavoritePlaceIds;

  async function handleToggleFavorite(placeId) {
    if (!accountToken) {
      setLocalFavoritePlaceIds((currentIds) =>
        currentIds.includes(placeId)
          ? currentIds.filter((id) => id !== placeId)
          : [...currentIds, placeId],
      );
      return;
    }

    if (
      !accountFavoritesReady ||
      accountFavorites.error ||
      favoriteSaveInProgress.current
    ) {
      return;
    }

    const token = accountToken;
    const isFavorite = favoritePlaceIds.includes(placeId);

    favoriteSaveInProgress.current = true;
    setFavoriteSave({ token, pending: true, error: "" });

    try {
      const result = await (isFavorite ? removeFavorite : addFavorite)(
        token,
        placeId,
      );

      if (sessionStorage.getItem("lumaToken") !== token) return;

      setAccountFavorites({
        token,
        ids: result.favoritePlaceIds,
        error: "",
      });
    } catch (error) {
      if (sessionStorage.getItem("lumaToken") !== token) return;

      if (error.status === 401) {
        handleLogout();
      } else {
        setFavoriteSave({
          token,
          pending: false,
          error: error.message || "Unable to save favorites.",
        });
      }
    } finally {
      favoriteSaveInProgress.current = false;

      setFavoriteSave((current) =>
        current?.token === token ? { ...current, pending: false } : current,
      );
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

  function handleUpdateTrip(
    tripId,
    newName,
    newStartDate,
    newEndDate,
    newNotes,
  ) {
    setTrips((currentTrips) =>
      currentTrips.map((trip) => {
        if (trip.id !== tripId) {
          return trip;
        }

        return {
          ...trip,
          name: newName,
          startDate: newStartDate,
          endDate: newEndDate,
          notes: newNotes,
        };
      }),
    );
  }

  return (
    <>
      <Header
        favoriteCount={favoritePlaceIds.length}
        currentUser={auth?.user}
        onLogout={handleLogout}
      />

      {accountToken && !accountFavoritesReady && (
        <p role="status">Loading your favorites…</p>
      )}

      {accountFavoritesReady && accountFavorites.error && (
        <p role="alert">{accountFavorites.error}</p>
      )}

      {accountToken && favoriteSave?.token === accountToken && (
  <>
    {favoriteSave.pending && (
      <p role="status">Saving your favorites…</p>
    )}
    {favoriteSave.error && (
      <p role="alert">{favoriteSave.error}</p>
    )}
  </>
)}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/art" element={<Art />} />
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
        <Route path="/journal" element={<Journal trips={trips} />} />
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

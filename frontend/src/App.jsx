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
  getTrips,
  createTrip,
  updateTrip,
  deleteTrip,
  addPlaceToTrip,
  removePlaceFromTrip,
} from "./utils/api";

function App() {
  const [auth, setAuth] = useState(null);
  const [isRestoringAuth, setIsRestoringAuth] = useState(() =>
    Boolean(sessionStorage.getItem("lumaToken")),
  );
  const [authRestoreError, setAuthRestoreError] = useState("");
  const [accountFavorites, setAccountFavorites] = useState(null);
  const accountToken = auth?.token ?? null;
  const favoriteSaveInProgress = useRef(false);
  const [favoriteSave, setFavoriteSave] = useState(null);
  const [accountTrips, setAccountTrips] = useState(null);

  function handleLogin(loginResult) {
    sessionStorage.setItem("lumaToken", loginResult.token);
    setAuth(loginResult);
    setIsRestoringAuth(false);
    setAuthRestoreError("");
  }

  function handleLogout() {
    sessionStorage.removeItem("lumaToken");
    setAuth(null);
    setIsRestoringAuth(false);
    setAuthRestoreError("");
  }

  useEffect(() => {
    const token = sessionStorage.getItem("lumaToken");

    if (!token) return;

    let cancelled = false;

    getCurrentUser(token)
      .then(({ user }) => {
        if (!cancelled && sessionStorage.getItem("lumaToken") === token) {
          setAuth({ token, user });
          setAuthRestoreError("");
        }
      })
      .catch((error) => {
        if (cancelled || sessionStorage.getItem("lumaToken") !== token) {
          return;
        }

        if (error.status === 401) {
          sessionStorage.removeItem("lumaToken");
        } else {
          setAuthRestoreError(
            "Unable to restore your login. Please refresh or log in again.",
          );
        }
      })
      .finally(() => {
        if (!cancelled) {
          setIsRestoringAuth(false);
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

  useEffect(() => {
    if (!accountToken) return;

    let cancelled = false;

    getTrips(accountToken)
      .then(({ trips }) => {
        if (!cancelled) {
          setAccountTrips({
            token: accountToken,
            trips,
            error: "",
          });
        }
      })
      .catch((error) => {
        if (!cancelled) {
          setAccountTrips({
            token: accountToken,
            trips: [],
            error: error.message || "Unable to load your trips.",
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

  const [localTrips, setLocalTrips] = useState(() => {
    const savedTrips = localStorage.getItem("trips");

    return savedTrips ? JSON.parse(savedTrips) : [];
  });

  useEffect(() => {
    localStorage.setItem("trips", JSON.stringify(localTrips));
  }, [localTrips]);

  const accountTripsReady =
    accountToken !== null &&
    accountTrips?.token === accountToken &&
    !accountTrips.error;

  const trips = accountToken
    ? accountTripsReady
      ? accountTrips.trips
      : []
    : localTrips;

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

  async function handleCreateTrip(newTrip) {
    if (!accountToken) {
      setLocalTrips((currentTrips) => [...currentTrips, newTrip]);
      return;
    }

    if (accountTrips?.token !== accountToken || accountTrips.error) {
      throw new Error("Your account trips are unavailable. Please refresh.");
    }

    const token = accountToken;

    try {
      const { trip } = await createTrip(token, newTrip);

      if (sessionStorage.getItem("lumaToken") !== token) {
        throw new Error("Your login changed. Please check your account trips.");
      }

      setAccountTrips((current) =>
        current?.token === token
          ? { ...current, trips: [trip, ...current.trips] }
          : current,
      );
    } catch (error) {
      if (
        error.status === 401 &&
        sessionStorage.getItem("lumaToken") === token
      ) {
        handleLogout();
      }

      throw error;
    }
  }

  async function handleDeleteTrip(tripId) {
    if (!accountToken) {
      setLocalTrips((currentTrips) =>
        currentTrips.filter((trip) => trip.id !== tripId),
      );
      return;
    }

    const token = accountToken;

    if (
      accountTrips?.token !== token ||
      accountTrips.error ||
      !accountTrips.trips.some((trip) => trip.id === tripId)
    ) {
      throw new Error("This account trip is unavailable. Please refresh.");
    }

    try {
      await deleteTrip(token, tripId);

      if (sessionStorage.getItem("lumaToken") !== token) {
        throw new Error("Your login changed. Please check your account trips.");
      }

      setAccountTrips((current) =>
        current?.token === token
          ? {
              ...current,
              trips: current.trips.filter((trip) => trip.id !== tripId),
            }
          : current,
      );
    } catch (error) {
      if (
        error.status === 401 &&
        sessionStorage.getItem("lumaToken") === token
      ) {
        handleLogout();
      }

      throw error;
    }
  }

  async function handleAddPlaceToTrip(tripId, placeId) {
    if (!accountToken) {
      setLocalTrips((currentTrips) =>
        currentTrips.map((trip) => {
          if (
            String(trip.id) !== String(tripId) ||
            trip.places.includes(placeId)
          ) {
            return trip;
          }

          return {
            ...trip,
            places: [...trip.places, placeId],
          };
        }),
      );
      return;
    }

    const token = accountToken;

    if (
      accountTrips?.token !== token ||
      accountTrips.error ||
      !accountTrips.trips.some((trip) => trip.id === String(tripId))
    ) {
      throw new Error("This account trip is unavailable. Please refresh.");
    }

    try {
      const { trip: updatedTrip } = await addPlaceToTrip(
        token,
        tripId,
        placeId,
      );

      if (sessionStorage.getItem("lumaToken") !== token) {
        throw new Error("Your login changed. Please check your account trips.");
      }

      setAccountTrips((current) =>
        current?.token === token
          ? {
              ...current,
              trips: current.trips.map((trip) =>
                trip.id === updatedTrip.id ? updatedTrip : trip,
              ),
            }
          : current,
      );
    } catch (error) {
      if (
        error.status === 401 &&
        sessionStorage.getItem("lumaToken") === token
      ) {
        handleLogout();
      }

      throw error;
    }
  }

  async function handleRemovePlaceFromTrip(tripId, placeId) {
    if (!accountToken) {
      setLocalTrips((currentTrips) =>
        currentTrips.map((trip) =>
          String(trip.id) === String(tripId)
            ? {
                ...trip,
                places: trip.places.filter((id) => id !== placeId),
              }
            : trip,
        ),
      );
      return;
    }

    const token = accountToken;

    if (
      accountTrips?.token !== token ||
      accountTrips.error ||
      !accountTrips.trips.some((trip) => trip.id === String(tripId))
    ) {
      throw new Error("This account trip is unavailable. Please refresh.");
    }

    try {
      const { trip: updatedTrip } = await removePlaceFromTrip(
        token,
        tripId,
        placeId,
      );

      if (sessionStorage.getItem("lumaToken") !== token) {
        throw new Error("Your login changed. Please check your account trips.");
      }

      setAccountTrips((current) =>
        current?.token === token
          ? {
              ...current,
              trips: current.trips.map((trip) =>
                trip.id === updatedTrip.id ? updatedTrip : trip,
              ),
            }
          : current,
      );
    } catch (error) {
      if (
        error.status === 401 &&
        sessionStorage.getItem("lumaToken") === token
      ) {
        handleLogout();
      }

      throw error;
    }
  }

  async function handleUpdateTrip(
    tripId,
    newName,
    newStartDate,
    newEndDate,
    newNotes,
  ) {
    if (!accountToken) {
      setLocalTrips((currentTrips) =>
        currentTrips.map((trip) =>
          trip.id === tripId
            ? {
                ...trip,
                name: newName,
                startDate: newStartDate,
                endDate: newEndDate,
                notes: newNotes,
              }
            : trip,
        ),
      );
      return;
    }

    const token = accountToken;

    if (
      accountTrips?.token !== token ||
      accountTrips.error ||
      !accountTrips.trips.some((trip) => trip.id === tripId)
    ) {
      throw new Error("This account trip is unavailable. Please refresh.");
    }

    try {
      const { trip: updatedTrip } = await updateTrip(token, tripId, {
        name: newName,
        startDate: newStartDate,
        endDate: newEndDate,
        notes: newNotes,
      });

      if (sessionStorage.getItem("lumaToken") !== token) {
        throw new Error("Your login changed. Please check your account trips.");
      }

      setAccountTrips((current) =>
        current?.token === token
          ? {
              ...current,
              trips: current.trips.map((trip) =>
                trip.id === updatedTrip.id ? updatedTrip : trip,
              ),
            }
          : current,
      );
    } catch (error) {
      if (
        error.status === 401 &&
        sessionStorage.getItem("lumaToken") === token
      ) {
        handleLogout();
      }

      throw error;
    }
  }

  if (isRestoringAuth || authRestoreError) {
    return (
      <>
        <Header
          favoriteCount={0}
          currentUser={auth?.user}
          onLogout={handleLogout}
        />

        <main className="trip-details">
          {isRestoringAuth ? (
            <p role="status">Restoring your login…</p>
          ) : (
            <>
              <p role="alert">{authRestoreError}</p>
              <button type="button" onClick={handleLogout}>
                Continue as guest
              </button>
            </>
          )}
        </main>

        <Footer />
      </>
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
          {favoriteSave.pending && <p role="status">Saving your favorites…</p>}
          {favoriteSave.error && <p role="alert">{favoriteSave.error}</p>}
        </>
      )}

      {accountToken && accountTrips?.token !== accountToken && (
        <p role="status">Loading your trips…</p>
      )}

      {accountToken &&
        accountTrips?.token === accountToken &&
        (accountTrips.error ? (
          <p role="alert">{accountTrips.error}</p>
        ) : (
          <p role="status">
            Your account has {accountTrips.trips.length} saved trips.
          </p>
        ))}

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
            accountToken && !accountTripsReady ? (
              <main className="trip-details">
                {accountTrips?.token === accountToken && accountTrips.error ? (
                  <p role="alert">{accountTrips.error}</p>
                ) : (
                  <p role="status">Loading your trip…</p>
                )}
              </main>
            ) : (
              <TripDetails
                trips={trips}
                favoritePlaceIds={favoritePlaceIds}
                onToggleFavorite={handleToggleFavorite}
              />
            )
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

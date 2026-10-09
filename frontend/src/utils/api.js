const API_URL = import.meta.env.VITE_API_URL?.replace(/\/+$/, "");

async function request(path, options = {}) {
  if (!API_URL) {
    throw new Error("Luma API address is missing.");
  }

  const response = await fetch(`${API_URL}${path}`, options);
  const data = await response.json().catch(() => null);

  if (!response.ok) {
    const error = new Error(
      data?.message || `Backend request failed: ${response.status}`,
    );
    error.status = response.status;
    throw error;
  }

  return data;
}

export function checkBackendHealth() {
  return request("/health");
}

export function signup({ name, email, password }) {
  return request("/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });
}

export function login({ email, password }) {
  return request("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
}

export function getCurrentUser(token) {
  return request("/users/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function getFavorites(token) {
  return request("/users/me/favorites", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function addFavorite(token, placeId) {
  return request(`/users/me/favorites/${placeId}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function removeFavorite(token, placeId) {
  return request(`/users/me/favorites/${placeId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function getTrips(token) {
  return request("/trips", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function createTrip(token, { name, startDate, endDate, notes }) {
  return request("/trips", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, startDate, endDate, notes }),
  });
}

export function updateTrip(token, tripId, { name, startDate, endDate, notes }) {
  return request(`/trips/${tripId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, startDate, endDate, notes }),
  });
}

export function deleteTrip(token, tripId) {
  return request(`/trips/${tripId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function addPlaceToTrip(token, tripId, placeId) {
  return request(`/trips/${tripId}/places/${placeId}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function removePlaceFromTrip(token, tripId, placeId) {
  return request(`/trips/${tripId}/places/${placeId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function getJournalEntries(token) {
  return request("/journal", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function createJournalEntry(
  token,
  { title, text, placeId = null, tripId = null },
) {
  return request("/journal", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ title, text, placeId, tripId }),
  });
}

export function updateJournalEntry(
  token,
  entryId,
  { title, text, placeId = null, tripId = null },
) {
  return request(`/journal/${entryId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ title, text, placeId, tripId }),
  });
}

export function deleteJournalEntry(token, entryId) {
  return request(`/journal/${entryId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

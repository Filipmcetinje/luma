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

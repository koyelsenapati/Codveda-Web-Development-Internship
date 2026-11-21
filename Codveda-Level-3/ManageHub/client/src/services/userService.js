const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

async function request(endpoint, options = {}) {
  let response;

  try {
    response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers
      }
    });
  } catch {
    throw new Error("Cannot connect to the server. Make sure the backend is running.");
  }

  const result = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(result.message || "Something went wrong. Please try again.");
  }

  return result;
}

export async function getUsers() {
  const result = await request("/users");
  return result.data;
}

export async function createUser(user) {
  const result = await request("/users", {
    method: "POST",
    body: JSON.stringify(user)
  });
  return result.data;
}

export async function updateUser(id, user) {
  const result = await request(`/users/${id}`, {
    method: "PUT",
    body: JSON.stringify(user)
  });
  return result.data;
}

export async function deleteUser(id) {
  const result = await request(`/users/${id}`, { method: "DELETE" });
  return result.data;
}

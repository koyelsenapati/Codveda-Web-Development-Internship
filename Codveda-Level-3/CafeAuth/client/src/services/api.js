
const API_URL = "http://localhost:5000/api";

const apiRequest = async (endpoint, options = {}) => {
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...options.headers
    }
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
};

export const registerUser = (userData) =>
  apiRequest("/auth/register", {
    method: "POST",
    body: JSON.stringify(userData)
  });

export const loginUser = (userData) =>
  apiRequest("/auth/login", {
    method: "POST",
    body: JSON.stringify(userData)
  });

export const getCurrentUser = () =>
  apiRequest("/auth/me");

export const logoutUser = () =>
  apiRequest("/auth/logout", {
    method: "POST"
  });

export const forgotPassword = (email) =>
  apiRequest("/auth/forgot-password", {
    method: "POST",
    body: JSON.stringify({ email })
  });

export const resetPassword = (token, password) =>
  apiRequest(`/auth/reset-password/${encodeURIComponent(token)}`, {
    method: "POST",
    body: JSON.stringify({ password })
  });

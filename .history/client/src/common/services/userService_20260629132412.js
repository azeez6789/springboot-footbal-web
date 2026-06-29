import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8081/api", // Change to your Spring Boot port
  headers: {
    "Content-Type": "application/json",
  },
});

// ========================= USER =========================

export const registerUser = async (userData) => {
  const response = await api.post("/users/register", userData);
  return response.data;
};

export const loginUser = async (loginData) => {
  const response = await api.post("/users/login", loginData);
  return response.data;
};

export const getAllUsers = async () => {
  const response = await api.get("/users");
  return response.data;
};

export const updateUser = async (id, userData) => {
  const response = await api.put(`/users/${id}`, userData);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await api.delete(`/users/${id}`);
  return response.data;
};

// ========================= PLAYER PROFILE =========================

export const getAllPlayerProfiles = async () => {
  const response = await api.get("/player-profiles");
  return response.data;
};

export const getPlayerProfileById = async (id) => {
  const response = await api.get(`/player-profiles/${id}`);
  return response.data;
};

export const getPlayerProfileByUserId = async (userId) => {
  const response = await api.get(`/player-profiles/user/${userId}`);
  return response.data;
};

export const createPlayerProfile = async (profileData) => {
  const response = await api.post("/player-profiles", profileData);
  return response.data;
};

export const createPlayerProfileWithImage = async (formData) => {
  const response = await api.post(
    "/player-profiles/with-image",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};

export const updatePlayerProfile = async (id, profileData) => {
  const response = await api.put(`/player-profiles/${id}`, profileData);
  return response.data;
};

export const updatePlayerProfileWithImage = async (id, formData) => {
  const response = await api.put(
    `/player-profiles/${id}/with-image`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};

export const deletePlayerProfile = async (id) => {
  const response = await api.delete(`/player-profiles/${id}`);
  return response.data;
};
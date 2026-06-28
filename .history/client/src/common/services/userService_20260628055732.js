import axios from "axios";

const API_URL = "/api/users";
const PLAYER_PROFILE_URL = "/api/player-profiles";

// ========================= USER =========================

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error("Register Error:", error.response?.data || error.message);
    throw error;
  }
};

export const loginUser = async (loginData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, loginData);
    return response.data;
  } catch (error) {
    console.error("Login Error:", error.response?.data || error.message);
    throw error;
  }
};

export const getAllUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Get Users Error:", error.response?.data || error.message);
    throw error;
  }
};

export const updateUser = async (id, userData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, userData);
    return response.data;
  } catch (error) {
    console.error("Update User Error:", error.response?.data || error.message);
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Delete User Error:", error.response?.data || error.message);
    throw error;
  }
};

// ========================= PLAYER PROFILE =========================

export const getAllPlayerProfiles = async () => {
  try {
    const response = await axios.get(PLAYER_PROFILE_URL);
    return response.data;
  } catch (error) {
    console.error("Get Profiles Error:", error.response?.data || error.message);
    throw error;
  }
};

export const getPlayerProfileById = async (id) => {
  try {
    const response = await axios.get(`${PLAYER_PROFILE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Get Profile Error:", error.response?.data || error.message);
    throw error;
  }
};

export const getPlayerProfileByUserId = async (userId) => {
  try {
    const response = await axios.get(`${PLAYER_PROFILE_URL}/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Get Profile By User Error:", error.response?.data || error.message);
    throw error;
  }
};

export const createPlayerProfile = async (profileData) => {
  try {
    const response = await axios.post(PLAYER_PROFILE_URL, profileData);
    return response.data;
  } catch (error) {
    console.error("Create Profile Error:", error.response?.data || error.message);
    throw error;
  }
};

export const createPlayerProfileWithImage = async (formData) => {
  try {
    const response = await axios.post(
      `${PLAYER_PROFILE_URL}/with-image`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Create Profile With Image Error:", error.response?.data || error.message);
    throw error;
  }
};

export const updatePlayerProfile = async (id, profileData) => {
  try {
    const response = await axios.put(`${PLAYER_PROFILE_URL}/${id}`, profileData);
    return response.data;
  } catch (error) {
    console.error("Update Profile Error:", error.response?.data || error.message);
    throw error;
  }
};

export const updatePlayerProfileWithImage = async (id, formData) => {
  try {
    const response = await axios.put(
      `${PLAYER_PROFILE_URL}/${id}/with-image`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Update Profile With Image Error:", error.response?.data || error.message);
    throw error;
  }
};

export const deletePlayerProfile = async (id) => {
  try {
    const response = await axios.delete(`${PLAYER_PROFILE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Delete Profile Error:", error.response?.data || error.message);
    throw error;
  }
};
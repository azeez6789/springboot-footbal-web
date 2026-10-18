import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8081/api",
});

export const createTournament = (formData) => {
    return API.post("/tournaments", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};
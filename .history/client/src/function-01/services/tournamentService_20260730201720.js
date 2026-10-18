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

// GET
export const getAllTournaments=()=>{
    return API.get("/tournaments");
};

// DELETE
export const deleteTournament=(id)=>{
    return API.delete(`/tournaments/${id}`);
};

// UPDATE
export const updateTournament=(id,data)=>{
    return API.put(`/tournaments/${id}`,data);
};
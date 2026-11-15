import api from "../../common/services/api";

export const createTournament = (formData) => {
    return api.post("/tournaments", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};

// GET
export const getAllTournaments=()=>{
    return api.get("/tournaments");
};

// DELETE
export const deleteTournament=(id)=>{
    return api.delete(`/tournaments/${id}`);
};

// UPDATE
export const updateTournament=(id,data)=>{
    return api.put(`/tournaments/${id}`,data);
};
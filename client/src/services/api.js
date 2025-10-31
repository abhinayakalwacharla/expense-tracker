import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000/api",
});

export const getExpenses = () => api.get("/");
export const addExpense = (data) => api.post("/", data);
export const deleteExpense = (id) => api.delete(`/${id}`);

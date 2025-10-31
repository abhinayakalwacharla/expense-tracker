import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // backend URL
});

export const getExpenses = () => API.get("/expenses");
export const addExpense = (expenseData) => API.post("/expenses", expenseData);
export const deleteExpense = (id) => API.delete(`/expenses/${id}`);

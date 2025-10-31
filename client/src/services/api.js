import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // Make sure backend runs on port 5000
});

export default api;

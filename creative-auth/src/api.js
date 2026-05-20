// src/api.js
import axios from "axios";

const API = axios.create({
	baseURL: "http://localhost:5001",
});

export const registerUser = (formData) => API.post("/auth/register", formData);
export const loginUser = (formData) => API.post("/auth/login", formData);
// export const getAllUsers = (formData) => API.get("/auth/allUsers", formData);
export const getAllUsers = () => API.get("/auth/allUsers");

// src/api.js
import axios from "axios";

const API = axios.create({
	baseURL: "http://localhost:5001",
});

// Attach JWT to every request...
API.interceptors.request.use((req) => {
	const token = localStorage.getItem("token");

	if (token) {
		req.headers.Authorization = `Bearer ${token}`;
	}
	return req;
});

// Authorisation
export const registerUser = (formData) => API.post("/auth/register", formData);
export const loginUser = (formData) => API.post("/auth/login", formData);

// Users...
// export const getAllUsers = (formData) => API.get("/auth/allUsers", formData);
export const getAllUsers = () => API.get("/auth/allUsers");
// add delete user here (future me problem, if I have time)
// add update user here (future me problem, if I have time)

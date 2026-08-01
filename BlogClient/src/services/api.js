import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5096/api", // Check the port according to the backend.
});

export const getPosts = () => API.get("/posts");
export const createPost = (data) => API.post("/posts", data);
export const updatePost = (id, data) => API.put(`/posts/${id}`, data);
export const deletePost = (id) => API.delete(`/posts/${id}`);
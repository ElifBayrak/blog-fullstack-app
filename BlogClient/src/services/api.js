import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5096/api", // Check the port according to the backend.
});

export default API;
import axios from "axios"

export const api = axios.create({
    baseURL: "https://kenzie-portify-api.onrender.com",
    timeout: 20000,
})
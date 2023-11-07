import axios from "axios"

export const api = axios.create({
    baseURL: "https://api.annyapp.com.br/.netlify/functions/api",
    headers: {
        "Content-Type": "application/json",
    }
})
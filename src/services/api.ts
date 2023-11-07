import axios from "axios"

export const api = axios.create({
    baseURL: "https://main--gregarious-fairy-4c2652.netlify.app/.netlify/functions/server",
    headers: {
        "Content-Type": "application/json",
    }
})
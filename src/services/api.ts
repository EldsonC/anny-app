import axios from "axios"

export const api = axios.create({
    baseURL: "https://anny-back.vercel.app/",
    // baseURL: "http://localhost:3001/",
    headers: {
        "Content-Type": "application/json",
    }
})
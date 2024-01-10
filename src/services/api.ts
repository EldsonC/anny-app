import axios from "axios";

export const api = axios.create({
    baseURL: "https://anny-api.vercel.app/",
    // baseURL: "http://192.168.43.59:3001/",
    // baseURL: "http://localhost:3002/",
    headers: {
        "Content-Type": "application/json",
    }
})
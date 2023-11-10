import axios from "axios"

export const api = axios.create({
    baseURL: "https://anny-back-a40df124d19f.herokuapp.com/",
    // baseURL: "http://localhost:3002/",
    headers: {
        "Content-Type": "application/json",
    }
})
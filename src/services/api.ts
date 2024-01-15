import axios from "axios";

export const api = axios.create({
    // baseURL: "https://anny-api.vercel.app/",
    // baseURL: "https://api-anny-f4328ab2456f.herokuapp.com/",
    baseURL: "http://localhost:3002/",
    // headers: {
    //     "Content-Type": "application/json",
    // },
    // withCredentials: true,
})
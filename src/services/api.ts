import axios from "axios";

export const api = axios.create({
    // baseURL: "https://api-anny-ix1jy9tk1-edsons-projects-8235e0cd.vercel.app/",
    // baseURL: "http://192.168.43.59:3001/",
    baseURL: "http://localhost:3002/",
    // headers: {
    //     "Content-Type": "application/json",
    // }
})
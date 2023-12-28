import axios from "axios";

export const api = axios.create({
    // baseURL: "https://anny-back-a40df124d19f.herokuapp.com/",
    baseURL: "http://192.168.43.59:3001/",
    // headers: {
    //     "Content-Type": "application/json",
    // }
})
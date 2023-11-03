import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/home";
import { NotFound } from "../pages/404";
import { Login } from "../pages/login";
import { Register } from "../pages/register";

export function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
}
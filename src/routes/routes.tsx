import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/home";
import { NotFound } from "../pages/404";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { Privates } from "./privates";
import { Overview } from "../pages/app/pages/overview";

export function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/dashboard/sign-in" element={<Login/>}/>
            <Route path="/dashboard/sign-up" element={<Register/>}/>

            <Route path="/" element={<Privates/>}>
                <Route path="/dashboard/overview" element={<Overview/>}/>
            </Route>
            
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
}
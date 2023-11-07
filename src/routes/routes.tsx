import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/home";
import { NotFound } from "../pages/404";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { Privates } from "./privates";
import { Overview } from "../pages/app/pages/overview";
import { Schedule } from "../pages/app/pages/schedule";

export function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/dashboard/sign-in" element={<Login/>}/>
            <Route path="/dashboard/sign-up" element={<Register/>}/>

            <Route path="/" element={<Privates/>}>
                <Route path="/dashboard/overview" element={<Overview/>}/>
                <Route path="/dashboard/schedule" element={<Schedule/>}/>
            </Route>
            
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
}
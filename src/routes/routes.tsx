import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/home";
import { NotFound } from "../pages/404";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { Privates } from "./privates";
import { AnnyBoard } from "../pages/app/pages/annyboard";
import { Schedule } from "../pages/app/pages/schedule";
import { Code } from "../pages/code";
import { Payment } from "../pages/app/pages/payment";

export function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard/sign-in" element={<Login />} />
            <Route path="/dashboard/sign-up" element={<Register />} />
            <Route path="/sign-up/code" element={<Code />} />

            <Route path="/" element={<Privates />}>
                <Route path="/dashboard/annyboard" element={<AnnyBoard />} />
                <Route path="/dashboard/schedule" element={<Schedule />} />
                <Route path="/dashboard/payment" element={<Payment />} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
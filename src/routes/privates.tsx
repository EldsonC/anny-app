import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../context/context"

export const Privates = () => {
    const { userLogged } = useAuth();
    
    if(!userLogged()) {
        return <Navigate to="/dashboard/sign-in"/>
    }

    return <Outlet/>
}
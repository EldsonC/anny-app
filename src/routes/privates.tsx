import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../context/context"

export const Privates = () => {
    const { userLogged } = useAuth();

    const hasPermission = userLogged()
    

    if(!hasPermission) {
        return <Navigate to="/dashboard/sign-in"/>
    }

    if(hasPermission) {
        return <Outlet/>
    }

    return hasPermission ? <Outlet/> : <Navigate to="/"/>
}
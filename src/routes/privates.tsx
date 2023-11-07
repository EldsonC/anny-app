import { useState } from "react"
import { Navigate, Outlet } from "react-router-dom"


export const Privates = () => {
    const [hasPermission, setHasPermission] = useState(false)
    setHasPermission(false)
    
    if(!hasPermission) {
        return <Navigate to="/dashboard/sign-in"/>
    }

    if(hasPermission) {
        return <Outlet/>
    }

    return hasPermission ? <Outlet/> : <Navigate to="/"/>
}
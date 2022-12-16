import { Navigate, Outlet } from "react-router-dom"
import { NavBar } from "../components/nav/NavBar"
import { UserViews } from "./UserViews"

export const Authorized = () => {
    if (localStorage.getItem("wyf_token")) {
        return <>
            <Outlet />
            <NavBar />
            <UserViews />
        </>
    }
    return <Navigate to='/login' replace />
}
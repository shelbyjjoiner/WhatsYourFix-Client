import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"


export const ApplicationViews = () => {
    const localWhatsYourFixUser = localStorage.getItem("wyf_user")
    const whatsYourFixObject = JSON.parse(localWhatsYourFixUser)

    return <>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/*" element={<Authorized />}>
            </Route>
        </Routes>
    </>
}
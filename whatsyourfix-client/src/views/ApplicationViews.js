import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Homepage } from "../components/homepage/Homepage"
import { NeuroList } from "../components/neuros/NeuroList"
import { NeuroProfile } from "../components/neuros/NeuroProfile"
import { UserProfile } from "../components/neuros/UserProfile"
import { Authorized } from "./Authorized"


export const ApplicationViews = () => {
    return <>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Authorized />}>
                <Route path="/home" element={<Homepage />} />
                <Route path="/neuros" element={<NeuroList />} />
                <Route path="/neuros/:userId" element={<NeuroProfile />} />
                <Route path="/profile" element={<UserProfile />} />
            </Route>
        </Routes>
    </>
}
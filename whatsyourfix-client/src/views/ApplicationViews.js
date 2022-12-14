import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { NewHobby } from "../components/hobbies/createHobbies"
import { Homepage } from "../components/homepage/Homepage"
import { NeuroList } from "../components/neuros/NeuroList"
import { NeuroProfile } from "../components/neuros/NeuroProfile"
import { UserProfile } from "../components/neuros/UserProfile"
import { NewPostForm } from "../components/posts/NewPostForm"
import { UpdatePost } from "../components/posts/UpdatePost"
import { ViewPost } from "../components/posts/ViewPost"
import { Authorized } from "./Authorized"


export const ApplicationViews = () => {
    return <>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Authorized />}>
                <Route path="/home" element={<Homepage />} />
                <Route path="/hobby" element={<NewHobby />} />
                <Route path="/posts/new" element={<NewPostForm />} />
                <Route path="/posts/view" element={<ViewPost />} />
                <Route path="/neuros" element={<NeuroList />} />
                <Route path="/neuros/:userId" element={<NeuroProfile />} />
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/profile/:postId/update" element={<UpdatePost />} />
            </Route>
        </Routes>
    </>
}
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getUserById } from "../../managers/UserManager"
import { getPostByUser } from "../../managers/PostsManager"
import { getHobbies } from "../../managers/HobbiesManager"

export const NeuroProfile = (props) => {

    const [displayUser, setUser] = useState([])
    const [displayUserPost, setUserPost] = useState([])
    const navigate = useNavigate()
    const { userId } = useParams()

    useEffect(() => {
        getUserById(userId).then(data => setUser(data))
    }, [])

    useEffect(() => {
        getPostByUser(displayUserPost).then(data => setUserPost(data))
    })


    return <>
        <form className="neuro_profile">
            <header>Welcome to {displayUser.full_name} Page !</header>
        </form>
        <fieldset>
            <form className="neuro_hobbies">
                <h2>Their Hobbies Are</h2>
            </form>
        </fieldset>
        <fieldset>
            <form className="neuro_posts">
                <h3>Their Posts</h3>
                {displayUserPost.post}

            </form>
        </fieldset>
    </>


}
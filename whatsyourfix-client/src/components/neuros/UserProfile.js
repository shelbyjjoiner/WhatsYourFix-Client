import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getPostByUser } from "../../managers/PostsManager"
import { getUserById } from "../../managers/UserManager"

export const UserProfile = (props) => {
    const [displayPost, setPost] = useState([])
    const [displayUser, setUser] = useState([])
    // const [displayUserHobbies, setUserHobbies] =useState([])
    const navigate = useNavigate()
    const { userId } = useParams()

    useEffect(() => {
        getUserById(userId).then(data => setUser(data))
    }, [userId])

    useEffect(() => {
        getPostByUser(userId).then(data => setPost(data))
    }, [userId])

    return (
        <article className="profile">
            <header>Hello There!</header>
            <div>Here are Your Posts</div>


        </article>
    )
}

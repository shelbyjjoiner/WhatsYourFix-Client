import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { deletePostById } from "../../managers/PostsManager"
import { getUserProfile } from "../../managers/UserManager"
import "./users.css"


export const UserProfile = (props) => {
    const [user, setUser] = useState([])

    // const [displayUserHobbies, setUserHobbies] =useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getUserProfile(user).then(data => setUser(data))
    }, [])



    return (
        <article className="profile">
            <header>Hello There!</header>
            <div>Here are Your Posts</div>
            {
                user?.posts?.map(post => {
                    return <section key={`user--${user.id}`} className="user">
                        <div>{post.body}</div>

                        <button className="delete-button" onClick={() => deletePostById(post.id).then(() => { window.location.reload() })}>Delete</button>
                        <button className="update-button" onClick={() => navigate(`/profile/${post.id}/update`)}>Update</button>
                    </section>
                })
            }


        </article>
    )
}

import React, { useEffect, useState } from "react"
import { getUsers } from "../../managers/UserManager"
import { useNavigate } from "react-router-dom"

export const NeuroList = (props) => {
    const [users, setUsers] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getUsers().then(data => setUsers(data))
    }, [])


    return (
        <article className="users">
            {
                users.map(user => {
                    return <section key={`user--${user.id}`} className="user">
                        <div className="user_name">{user.full_name}</div>
                        <button className="view-profile-button" onClick={() => navigate(`/neuros/${user.id}`)}>View Profile</button>
                    </section>
                })
            }
        </article>
    )

}
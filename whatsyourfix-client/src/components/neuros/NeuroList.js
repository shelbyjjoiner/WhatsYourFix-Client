import React, { useEffect, useRef, useState } from "react"
import { getUsers } from "../../managers/UserManager"
import { useNavigate, useParams } from "react-router-dom"

export const NeuroList = (props) => {
    const [users, setUsers] = useState([])
    const navigate = useNavigate()
    const { userId } = useParams()

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
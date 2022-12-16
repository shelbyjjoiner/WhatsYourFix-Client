import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getUserById } from "../../managers/UserManager"
import { getHobbies } from "../../managers/HobbiesManager"

export const NeuroProfile = (props) => {

    const [displayUser, setUser] = useState([])
    // const [displayUserHobbies, setUserHobbies] =useState([])
    const navigate = useNavigate()
    const { userId } = useParams()

    useEffect(() => {
        getUserById(userId).then(data => setUser(data))
    }, [])

    // useEffect(
    //     () => {
    //         const user = recommend.filter(
    //             users =>
    //                 users.userId !== userObject.id
    //         )
    //         setFilter(rec)
    //     },
    //     [recommend]
    // )

    return <>
        <form className="neuro_profile">
            <header>Welcome to {displayUser.full_name} Page !</header>
        </form>
        <fieldset>
            <form className="neuro_hobbies">
                <h1>Their Hobbies Are</h1>

            </form>
        </fieldset>
    </>


}
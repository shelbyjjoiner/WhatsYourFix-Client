import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getHobbies } from "../../managers/HobbiesManager"
import "./homepage.css"

export const Homepage = () => {
    const [hobbies, setHobbies] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getHobbies().then(data => setHobbies(data))
    }, [])

    return <>
        <form className="homepage">
            <h1>Welcome to What's Your Fix?</h1>
            <div>judgement-free community to discuss your craziest hyper-fixations!</div>
        </form>
        <article className="hobbies">
            <h1>Hobbies</h1>
            {
                hobbies.map(hobbie => {
                    return <section key={`hobbie--${hobbie.id}`} className="hobby">
                        <div className="hobby__label">{hobbie.label}</div>
                    </section>
                })
            }
        </article>
        <article className>

        </article>

    </>
}
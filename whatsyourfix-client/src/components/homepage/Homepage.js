import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getHobbies } from "../../managers/HobbiesManager"
import { getPosts } from "../../managers/PostsManager"
import "./homepage.css"

export const Homepage = () => {
    const [posts, setPosts] = useState([])
    const [hobbies, setHobbies] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getPosts().then(data => setPosts(data))
    }, [])


    return <>
        <form className="homepage">
            <h1>Welcome to What's Your Fix?</h1>

            <div>judgement-free community to discuss your craziest hyper-fixations!</div>
        </form>
        <article className="hobbies">
            <h1>Hobbies</h1>
            <button className="create-hobby" onClick={() => navigate(`/hobby`)}>Add Hobby</button>
        </article>
        <h1>Posts</h1>
        <article className="posts">
            <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    navigate({ pathname: "/posts/new" })
                }}
            >Make New Post</button>
            <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    navigate({ pathname: "/posts/view" })
                }}
            >View Posts</button>
        </article>

    </>
}
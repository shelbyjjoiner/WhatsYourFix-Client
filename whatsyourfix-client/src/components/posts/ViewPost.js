import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { getPosts } from "../../managers/PostsManager"
import "./post.css"

export const ViewPost = () => {

    const [posts, setPosts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getPosts().then(data => setPosts(data))
    }, [])






    return (
        <article className="posts">
            {
                posts.map(post => {
                    return <section key={`post--${post.id}`} className="posts">

                        <div className="post_content">
                            {post.hobbies}
                            {post.body}
                            {post.image}
                            {post.item}
                        </div>
                    </section>
                })
            }
        </article>
    )
}
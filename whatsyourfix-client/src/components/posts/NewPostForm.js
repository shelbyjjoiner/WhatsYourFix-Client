import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { createPost } from "../../managers/PostsManager"
import { createHobby, getHobbies } from "../../managers/HobbiesManager"

export const NewPostForm = () => {
    const navigate = useNavigate()
    const [hobbies, setHobbies] = useState([])
    const [currentPost, setCurrentPost] = useState({
        hobbies: 0,
        body: "",
        image: "",
        item: ""
    })


    useEffect(() => {
        createPost().then()
    }, [])

    useEffect(() => {
        getHobbies().then(setHobbies)
    }, [])


    const changePostState = (domEvent) => {

        const copy = { ...currentPost }
        const propertyToModify = domEvent.target.id
        copy[propertyToModify] = domEvent.target.value
        setCurrentPost(copy)
    }

    return <>
        <form className="postForm">
            <h2>Create A New Post</h2>
            <fieldset>
                <div className="form-post">
                    <label htmlFor="hobbies">Hobbies:</label>
                    <select id="hobbies" className="drop_down" value={currentPost.hobbies}
                        onChange={changePostState}>

                        <option value={0}>Select A Hobby</option>
                        {
                            hobbies.map((hobbie) => {
                                return <option value={`${hobbie.id}`} key={`hobbie--${hobbie.id}`}>{hobbie.label}</option>
                            }
                            )

                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-post">
                    <label htmlFor="body">Body:</label>
                    <input type="text" id="body" required autoFocus className="form-control"
                        value={currentPost.body}
                        onChange={changePostState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-post">
                    <label htmlFor="image">Image:</label>
                    <input type="text" id="image"
                        value={currentPost.image}
                        onChange={changePostState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-post">
                    <label htmlFor="item">Item:</label>
                    <input type="text" id="item" required autoFocus className="form-control"
                        value={currentPost.item}
                        onChange={changePostState}
                    />
                </div>
            </fieldset>

            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()

                    const post = {
                        hobbies: parseInt(currentPost.hobbies),
                        body: currentPost.body,
                        image: currentPost.image,
                        item: currentPost.item
                    }

                    createPost(post)
                        .then(() => navigate("/home"))
                }}
                className="btn btn-primary">Create</button>



        </form>
    </>

}
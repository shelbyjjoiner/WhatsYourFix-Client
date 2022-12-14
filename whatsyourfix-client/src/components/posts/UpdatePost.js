import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getHobbies } from "../../managers/HobbiesManager";
import { getPostById, saveUpdatedPost } from "../../managers/PostsManager";


export const UpdatePost = () => {
    const { postId } = useParams()
    const navigate = useNavigate()
    const [hobbies, setHobbies] = useState([])

    const [currentPost, setCurrentPost] = useState({
        id: 0,
        hobbies: 0,
        body: "",
        image: "",
        item: ""
    })

    useEffect(() => {
        getPostById(postId).then(setCurrentPost)
    }, [postId])

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
                        id: currentPost.id,
                        hobbies: parseInt(currentPost.hobbies),
                        body: currentPost.body,
                        image: currentPost.image,
                        item: currentPost.item
                    }

                    saveUpdatedPost(post)
                        .then(() => navigate("/profile"))
                }}
                className="btn btn-primary">Update</button>



        </form>
    </>
}


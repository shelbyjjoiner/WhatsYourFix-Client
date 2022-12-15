import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { createHobby, getHobbies } from "../../managers/HobbiesManager"

export const NewHobby = () => {
    const navigate = useNavigate()
    const [hobby, setHobby] = useState([])
    const [currentHobby, setCurrentHobby] = useState({
        label: ""
    })

    useEffect(() => {
        getHobbies().then(setHobby)
    }, [])

    const changeHobbyState = (evt) => {
        const copy = { ...hobby }
        const propertyToModify = evt.target.id
        copy[propertyToModify] = evt.target.value
        setCurrentHobby(copy)
    }



    return <>
        <form className="createHobby">
            <h2>What's Your Newest Fixation?</h2>
            <fieldset>
                <div className="hobby-form">
                    <label htmlFor="text">Enter Below:</label>
                    <input id="label" required autoFocus className="form-control"
                        value={currentHobby.label}
                        onChange={changeHobbyState}
                    />
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()

                    const hobby = {
                        label: currentHobby.label
                    }

                    createHobby(hobby)
                        .then(() => navigate("/home"))

                }}
                className="btn btn-primary">Submit</button>

        </form>

    </>

}
import React, { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { registerUser } from "../../managers/AuthorizationManager"
import "./login.css"


export const Register = () => {
    const first_name = useRef()
    const last_name = useRef()
    const username = useRef()
    const bio = useRef()
    const password = useRef()
    const verifyPassword = useRef()
    const passwordDialog = useRef()
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()

        if (password.current.value === verifyPassword.current.value) {
            const newUser = {
                "username": username.current.value,
                "first_name": first_name.current.value,
                "last_name": last_name.current.value,
                "bio": bio.current.value,
                "password": password.current.value
            }

            registerUser(newUser)
                .then(res => {
                    if ("token" in res) {
                        localStorage.setItem("wyf_token", res.token)
                        navigate("/")
                    }
                })
        } else {
            passwordDialog.current.showModal()
        }

    }

    return (

        <main style={{ textAlign: "center" }}>

            <dialog className="dialog dialog--password" ref={passwordDialog}>
                <div>Passwords do not match</div>
                <button className="button--close" onClick={e => passwordDialog.current.close()}>Close</button>
            </dialog>

            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Register an account</h1>
                <fieldset>
                    <label htmlFor="first_name"> First Name </label>
                    <input ref={first_name} type="text" name="first_name" className="form-control" placeholder="First name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="last_name"> Last Name </label>
                    <input ref={last_name} type="text" name="last_name" className="form-control" placeholder="Last name" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputUsername">Username</label>
                    <input ref={username} type="text" name="username" className="form-control" placeholder="Username" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputPassword"> Password </label>
                    <input ref={password} type="password" name="password" className="form-control" placeholder="Password" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="verifyPassword"> Verify Password </label>
                    <input ref={verifyPassword} type="password" name="verifyPassword" className="form-control" placeholder="Verify password" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="verifyPassword"> Bio</label>
                    <textarea ref={bio} name="bio" className="form-control" placeholder="what's your biggest hyperfixation?" />
                </fieldset>
                <fieldset style={{
                    textAlign: "center"
                }}>
                    <button className="btn btn-1 btn-sep icon-send" type="submit">Register</button>
                </fieldset>
            </form>
            <section className="link--register">
                Already registered? <Link to="/login">Login</Link>
            </section>
        </main>

    )

}
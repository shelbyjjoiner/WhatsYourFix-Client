import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()
    return (
        <ul className="navbar">
            <ol className="navbar__item">
                <Link className="navbar__Link" to="/home">Home</Link>
            </ol>
            <ol className="navbar__item">
                <Link className="navbar__Link" to="/neuros">Neuros</Link>
            </ol>
            <ol className="navbar__item">
                <Link className="navbar__Link" to="/profile">Profile</Link>
            </ol>
            {
                (localStorage.getItem("wyf_token") !== null) ?
                    <ul className="nav-item">
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("wyf_token")
                                navigate('/login')
                            }}
                        >Logout</button>
                    </ul> :
                    <>
                        <ol className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </ol>
                        <ol className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </ol>
                    </>
            } </ul>
    )
}

import { Link } from "react-router-dom"
import { cookie } from "../refreshLogin"
import axios from "axios";
export default function Header() {
    const getToken = cookie.get("Bearer");
    async function handleLogout() {
        // window.localStorage.removeItem("email");
        await axios.post("http://127.0.0.1:8000/api/logout",null,{
                    headers:{
                        Authorization: "Bearer " + getToken,
                }});
        window.location.pathname = "/Login";
        cookie.remove("Bearer");
    }
    return <header>
        <ul className="header">
            <div>
            <li><Link to={"/Home"} className="nav" id="home">Home</Link></li>
            <li><Link to={"/About"} className="nav" id="about">About</Link></li>
            <li><Link to={"/Contact"} className="nav" id="contact">Contact</Link></li>
            </div>
            {/* {!window.localStorage.getItem("email")? */}
            {!getToken?
            <div>
                <li><Link to={"/Login"} className="nav" id="login">Login</Link></li>
                <li><Link to={"/Sign_Up"} className="nav" id="sign">Sign Up</Link></li>

            </div>
            :
            <div>
                <li><Link to={"/dashboard"} className="nav" id="dash">Dashboard</Link></li>
                <li><Link to={"/Logout"} className="nav" id="logout" onClick={handleLogout}>Logout</Link></li>
            </div>}
        </ul>
    </header>
}

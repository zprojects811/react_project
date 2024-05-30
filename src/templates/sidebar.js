import { Link } from "react-router-dom";
export default function Sidebar() {
    return <div className="father-side">
        <Link to={"/dashboard/users"} className="side"><i className="fa-solid fa-users"></i>users</Link>
        <Link to={"/dashboard/new_user"} className="side"><i className="fa-solid fa-user-plus"></i>new user</Link>
    </div>
}

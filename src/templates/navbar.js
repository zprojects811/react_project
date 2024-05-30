import { Link } from "react-router-dom";
export default function Navbar() {
    return <div className="father-top">
        <h1 className="topbar-title">Store</h1>
        <Link to={"/Home"} className="topbar-btn">Go To Site</Link>
    </div>
}

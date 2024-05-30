//import { Route, Routes } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navbar from "./templates/navbar";
import Sidebar from "./templates/sidebar";
//import Users from "./users";

export default function Dashboard() {
    return  <div>
        <div><Navbar/></div>
        <div className="side-and-content">
            <div><Sidebar/></div>
            <div className="dashboard-content">
                <Outlet/>
            </div>
        </div>
    </div>
}

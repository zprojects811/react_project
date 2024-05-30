import { useContext } from "react";
import { User } from "./templates/context";
import {  Navigate, Outlet } from "react-router-dom";
//import { cookie } from "./refreshLogin";
export default function RequireAuth() {
    //const getToken = cookie.get("Bearer")
    const user = useContext(User);
    return user.auth.userDetails? <Outlet/>:<Navigate to={"/Login"}/>
    // return getToken? <Outlet/>:<Navigate to={"/Login"}/>
}

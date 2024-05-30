import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { User } from "./templates/context";
import { Outlet } from "react-router-dom";
import LoadingScrean from "./templates/loadingScrean";
import Cookies from "universal-cookie";
//import { cookie } from "./templates/forms";
export const cookie = new Cookies();

export default function RefreshLogin() {
    const userData = useContext(User);
    const token = userData.auth.token;
    const [load,setLoad] = useState(true);
    const getToken = cookie.get("Bearer");
    // const cookie = new Cookies();
    // cookie.set("Bearer",token);
    // const getToken = cookie.get("Bearer");
    //console.log(getToken);


    useEffect(()=>{
        async function refresh() {
            try {
                await axios.post("http://127.0.0.1:8000/api/refresh",null,{
                    headers:{
                        Authorization: "Bearer " + getToken,
                }}).then((data)=>{
                cookie.set("Bearer",data.data.token);
                userData.setAuth((prev)=>{return {userDetails:data.data.userDetails,token:data.data.token}})});
            } catch (error) {
                console.log(error)
            } finally{
                setLoad(false)
            }
        }
    !token?refresh():setLoad(false);
    },[])
    return load? <LoadingScrean/>:<Outlet/>;
}

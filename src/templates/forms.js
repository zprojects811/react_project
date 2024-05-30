import axios from "axios";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { User } from "./context";
import { useNavigate } from "react-router-dom";
import { cookie } from "../refreshLogin";
export default function Forms(props) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [active, setActive] = useState(false);
    const [errorNum,setErrorNum] = useState(false);
    const nav = useNavigate();
    const getToken = cookie.get("Bearer");


    // let flag = true

    const userNow = useContext(User);
    //console.log(userNow);
    ///////////////////////////////
    useEffect(()=>{
        setUsername(props.name);
        setEmail(props.email)
    },[props.name,props.email])
    ///////////////////////////////

    return(
    <div className='grand-father'>
    <div className='father'>
        <h1 className='sign-up-word'>{props.label}</h1>
        <form onSubmit={handleSubmit}>

            <label htmlFor="username">Username</label>
            <input
                required
                placeholder='Enter your name'
                id='username'
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            {/* {username.length<=2&&active===true&&<p style={{color:"red"}}>Username must be more than 2 characters!</p>} */}
            <hr></hr>

            <label htmlFor="email">Email</label>
            <input
                placeholder='Enter your email'
                id='email'
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {errorNum===true&&active===true&&<p style={{color:"red"}}>an email is already been taken!</p>}
            <hr></hr>

            <label htmlFor="password">Password</label>
            <div id='fatherOfPass'>
                <input
                    required
                    placeholder='Create a password'
                    id='password'
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{width:"88.6%"}}
                />
                {password.length<=8&&active===true&&<p style={{color:"red"}}>the password must be more than 8 characters!</p>}
            </div>
            <hr></hr>

            <label htmlFor="password2">Repeat password</label>
            <div id='fatherOfRepeat'>
                <input
                    required
                    placeholder='Confirm the password'
                    id='password2'
                    type="password"
                    value={repeatPassword}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                    style={{width:"88.6%"}}
                />
                {password !== repeatPassword&&active===true&&<p style={{color:"red"}}>password dose not match!</p>}
            </div>
            <hr></hr>

            <div className='button-father'>
                <button className="submit" type="submit">{props.button}</button>
            </div>
        </form>
    </div>
</div>
)

async function handleSubmit(e) {
e.preventDefault();
setActive(true);
// if (username.length<=1 || password.length<=8 || password !== repeatPassword) {
//     flag = false
// } else {flag = true}
try{
// if (flag === true) {
    //send the data
    let res = await axios.post(`http://127.0.0.1:8000/api/${props.api}`,{
        name:username,
        email:email,
        password:password,
        password_confirmation:repeatPassword,
    },{
        headers:{
            Authorization: "Bearer " + getToken,
    }});
    if (res.status === 200) {
        //props.hasLocalStorage && window.localStorage.setItem("email",email);
        // window.location.pathname = `${props.path}`;
    };
    const token = res.data.data.token
    const userDetails = res.data.data.user
    userNow.setAuth({token,userDetails})
    cookie.set("Bearer",token);
    nav('/dashboard');
// }
} catch (err) {
    if (err.response.status === 422 || err.response.status === 401) {
        setErrorNum(true)
    };
    setActive(true);
}
}
}


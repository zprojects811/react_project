import axios from 'axios';
import { useContext, useState } from 'react';
import Header from './templates/header';
import { User } from './templates/context';
import { useNavigate } from 'react-router-dom';
import { cookie } from './refreshLogin';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [active, setActive] = useState(false);
    const [errorNum,setErrorNum] = useState(false);
    const userNow = useContext(User);
    const nav = useNavigate();
    //const cookie = new Cookies();
    const getToken = cookie.get("Bearer");

    //let flag = true
    return (
        <div>
            <div><Header/></div>
            <div className='grand-father'>
                <div className='father'>
                    <h1 className='sign-up-word'>Login</h1>
                    <form onSubmit={handleSubmit}>

                        <label htmlFor="email">Email</label>
                        <input
                            placeholder='Enter your email'
                            id='email'
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <hr></hr>

                        <label htmlFor="password">Password</label>
                        <div id='fatherOfPass'>
                            <input
                                required
                                placeholder='Enter your password'
                                id='password'
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={{width:"88.6%"}}
                            />
                            {password.length<=8&&active===true&&<p style={{color:"red"}}>the password must be more then 8 character!</p>}
                        </div>
                        <hr></hr>
                        <div className='button-father'>
                            <button className="submit" type="submit">Login</button>
                        </div>
                        {errorNum===true&&active===true&&<p style={{color:"red"}}>wrong!</p>}
                    </form>
                </div>
            </div>
        </div>);
        async function handleSubmit(e) {
                e.preventDefault();
                setActive(true);
                // if (password.length<=8) {
                //     flag = false
                // } else {flag = true}
                try{
                // if (flag === true) {
                    //send the data
                    let res = await axios.post("http://127.0.0.1:8000/api/login",{
                        email:email,
                        password:password,
                    },{
                        headers:
                        {
                        Authorization: "Bearer " + getToken,
                    }})
                if (res.status === 200) {
                    //window.localStorage.setItem("email",email);
                    //window.location.pathname = "/Login";
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

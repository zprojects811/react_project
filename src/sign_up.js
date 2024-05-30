// sign_up.js
// import axios from 'axios';
// import { useState } from 'react';
// import Header from './templates/header';

// export default function SignupForm() {

//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [repeatPassword, setRepeatPassword] = useState('');
//     const [active, setActive] = useState(false);
//     const [errorNum,setErrorNum] = useState(false);
//     // const [response,setResponse] = useState('');
//     // const [flag,setFlag] = useState(false);
//     let flag = true


//     return (
//     <div>
//         <div><Header/></div>
//         <div className='grand-father'>
//             <div className='father'>
//                 <h1 className='sign-up-word'>Sign Up</h1>
//                 <form onSubmit={handleSubmit}>

//                     <label htmlFor="username">Username</label>
//                     <input
//                         required
//                         placeholder='Enter your name'
//                         id='username'
//                         type="text"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                     />
//                     <hr></hr>

//                     <label htmlFor="email">Email</label>
//                     <input
//                         placeholder='Enter your email'
//                         id='email'
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                     {errorNum===true&&active===true&&<p style={{color:"red"}}>an email is already been taken!</p>}
//                     <hr></hr>

//                     <label htmlFor="password">Password</label>
//                     <div id='fatherOfPass'>
//                         <input
//                             required
//                             placeholder='Create a password'
//                             id='password'
//                             type="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             style={{width:"88.6%"}}
//                         />
//                         {password.length<=8&&active===true&&<p style={{color:"red"}}>the password must be more then 8 character!</p>}
//                     </div>
//                     <hr></hr>

//                     <label htmlFor="password2">Repeat password</label>
//                     <div id='fatherOfRepeat'>
//                         <input
//                             required
//                             placeholder='Confirm the password'
//                             id='password2'
//                             type="password"
//                             value={repeatPassword}
//                             onChange={(e) => setRepeatPassword(e.target.value)}
//                             style={{width:"88.6%"}}
//                         />
//                         {password !== repeatPassword&&active===true&&<p style={{color:"red"}}>password dose not match!</p>}
//                     </div>
//                     <hr></hr>

//                     <div className='button-father'>
//                         <button className="submit" type="submit">Sign up</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     </div>);



//     async function handleSubmit(e) {
//         e.preventDefault();
//         setActive(true);
//         if (username.length<=1 || password.length<=8 || password !== repeatPassword) {
//             flag = false
//         } else {flag = true}
//         try{
//         if (flag === true) {
//             //send the data
//             let res = await axios.post("http://127.0.0.1:8000/api/register",{
//                 name:username,
//                 email:email,
//                 password:password,
//                 password_confirmation:repeatPassword,
//             });
//             if (res.status === 200) {
//                 window.localStorage.setItem("email",email);
//                 window.location.pathname = "/Home";
//             };

//         }} catch (err) {
//             if (err.response.status === 422) {
//                 setErrorNum(true)
//             };
//         }
////////////////////////////////////////(test only)/////////////////////////////////////////////////
        // if (password.length<=8) {
        //     let fatherOfPass = document.getElementById("fatherOfPass");
        //     const pExists = fatherOfPass.querySelector('p');
        //     e.preventDefault();
        //     if (!pExists) {
        //         let pragraph1 = document.createElement('p');
        //         let lenMsg = document.createTextNode("the password must be more then 8 character");
        //         pragraph1.appendChild(lenMsg);
        //         pragraph1.style.cssText = ("color:red");
        //         let password1 = document.getElementById("password");

        //         return password1.after(pragraph1);
        //     }
        // }

        // if(password !== repeatPassword) {
        //     let fatherOfRepeat = document.getElementById("fatherOfRepeat");
        //     const pExists2 = fatherOfRepeat.querySelector('p');
        //     e.preventDefault();
        //     if (!pExists2) {
        //         let pragraph2 = document.createElement('p');
        //         let noMatchMsg = document.createTextNode("password dose not match!");
        //         pragraph2.appendChild(noMatchMsg);
        //         pragraph2.style.cssText = ("color:red");
        //         let Password2 = document.getElementById("password2");

        //         return Password2.after(pragraph2);
        //     }
        // }
////////////////////////////////////////////////////////////////////////////////////
//     }
// }

import Forms from './templates/forms';
import Header from './templates/header';
export default function SignupForm() {
    return (<div>
                <div><Header/></div>
                <Forms label="Sign Up" button="Sign up"  api="register"/>
    </div>)
}
// path="/Home"

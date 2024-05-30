// import axios from 'axios';
// import { useEffect, useState } from 'react';


// export default function UpdateUser() {

//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [repeatPassword, setRepeatPassword] = useState('');
//     const [active, setActive] = useState(false);
//     let flag = true

//     let id = window.location.pathname.split("/").slice(-1).join();
//     useEffect(
//         ()=>{fetch(`http://127.0.0.1:8000/api/user/showbyid/${id}`).then((res)=>res.json()).then((data)=>{
//             setUsername(data[0].name);
//             setEmail(data[0].email);
//         })}
//     ,[])


//     return (
//     <div>
//         <div className='grand-father'>
//             <div className='father'>
//                 <h1 className='sign-up-word'>Update</h1>
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
//                         <button className="submit" type="submit">Update</button>
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
//             let res = await axios.post(`http://127.0.0.1:8000/api/user/update/${id}`,{
//                 name:username,
//                 email:email,
//                 password:password,
//                 password_confirmation:repeatPassword,
//             });
//             if (res.status === 200) {
//                 window.localStorage.setItem("email",email);
//                 window.location.pathname = "/dashboard/users";
//             };

//         }} catch (err) {
//             console.log(err)
//         }
//     }
// }
import { useContext, useEffect, useState } from 'react';
import Forms from './templates/forms';
import { User } from './templates/context';
import axios from 'axios';
//import { cookie } from './refreshLogin';

export default function UpdateUser() {
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const userData = useContext(User);
        const token = userData.auth.token;
        //const getToken = cookie.get("Bearer")


        let id = window.location.pathname.split("/").slice(-1).join();
        useEffect(
            ()=>{axios.get(`http://127.0.0.1:8000/api/user/showbyid/${id}`,{
                headers: {
                    Authorization: "Bearer " + token,
                },
            }).then((data)=>{
                setName(data.data[0].name);
                setEmail(data.data[0].email);
            }).catch((err)=>console.log(err))}
        ,[])

    return (<div>
        <Forms label="Update User" button="Update" name={name} email={email} path="/dashboard/users" api={`user/update/${id}`}/>
    </div>);
}


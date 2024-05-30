// import axios from "axios";
// import { useEffect, useState } from "react"
// import { Link } from "react-router-dom";
// export default function Users() {
//     const [users,setUsers] = useState([]);
//     const [runUseEffect,setRun] = useState(0);

//     async function deleteUser(id) {
//         try{
//             const res = await axios.delete(`http://127.0.0.1:8000/api/user/delete/${id}`)
//             if (res.status === 200) {
//                 setRun((oldValue)=>oldValue+1)
//             }
//         }catch{
//             console.log("");
//         }
//     }

//     useEffect(()=>{
//         fetch('http://127.0.0.1:8000/api/user/show').then((res)=>res.json().then((data)=>setUsers(data)))
//     },[runUseEffect])

//     const showUsers = users.map((user,index)=><tr key={index}>
//         <td>{index+1}</td>
//         <td>{user.name}</td>
//         <td>{user.email}</td>
//         <td className="action">
//             <Link to={`${user.id}`}>
//                 <i className="fa-solid fa-pen-to-square" id="update"></i>
//             </Link>
//             <i className="fa-solid fa-trash" id="delete" onClick={()=>deleteUser(user.id)}></i>
//         </td>
//     </tr>)

//     return <div>
//         <table className="table1">
//             <thead>
//                 <tr className="tr-head">
//                     <th>id</th>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th>Action</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {showUsers}
//             </tbody>
//         </table>
//     </div>
// }
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { User } from "./templates/context"
import { cookie } from "./refreshLogin"
//import { cookie } from "./refreshLogin"
//import { Link } from "react-router-dom"

export default function Users() {
    const [useEffectNum,setUseEffect] = useState(0)
    const [users,setUsers] = useState([])
    const userData = useContext(User);
    const token = userData.auth.token;

    async function deleteUser(id){
        try{
            const res = await axios.delete(`http://127.0.0.1:8000/api/user/delete/${id}`,{
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            if (res.status === 200) {
                setUseEffect((parse)=>parse+1)
            }
        }catch{
            console.log("")
        }
    }


    //const getToken = cookie.get("Bearer");
    //const token = userData.data.data.token
    useEffect(()=>{axios.get('http://127.0.0.1:8000/api/user/show',{
        headers: {
            Authorization: "Bearer " + token,
            Accept: "application/json"
        },
    }).then((data)=>setUsers(data.data)).catch((err)=>console.log(err))},[useEffectNum])
    const showUsers = users.map((user,index)=><tr key={index}>
        <td>{index+1}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td className="action">
            <Link to={`${user.id}`}>
                <i className="fa-solid fa-pen-to-square" id="update"></i>
            </Link>
            <i className="fa-solid fa-trash" id="delete" onClick={()=>deleteUser(user.id)}></i>
        </td>
    </tr>)
    return <div>
        <table className="table1">
            <thead>
                <tr className="tr-head">
                    <th>id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {showUsers}
            </tbody>

        </table>
    </div>
}

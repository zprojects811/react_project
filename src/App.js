// App.js
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignupForm from './sign_up';
//import Header from './templates/header';
import Login from './login';
import Home from './home';
import About from './about';
import Contact from './contact';
import Dashboard from './dashboard';
import Users from './users';
import UpdateUser from './updateUser';
import NewUser from './new_user';
import RequireAuth from './RequireAuth';
import RefreshLogin from './refreshLogin';



export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Sign_Up' element={<SignupForm/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Logout' element={<Login/>}/>

        <Route element={<RefreshLogin/>}>
          <Route element={<RequireAuth/>}>
            <Route path='/dashboard'element={<Dashboard/>}>
              <Route path='users' element={<Users/>}/>
              <Route path='users/:id' element={<UpdateUser/>}/>
              <Route path='new_user' element={<NewUser/>}/>
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}






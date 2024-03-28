import React, {useState} from 'react'
import {logout} from "../../store/authSlice"
import appwriteService from '../../appwrite/auth'
import {useDispatch} from "react-redux"
import { useNavigate } from 'react-router-dom';

function LogoutBtn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const [first, setfirst] = useState(null)

    const logoutHandler = () => {
        appwriteService.logout().then(() => {
            dispatch(logout());
            // setfirst('');
            navigate('/login');
            
        })
    }
  return (
    <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn
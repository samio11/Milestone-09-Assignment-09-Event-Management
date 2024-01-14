import React, { useContext } from 'react';
import { Link, NavLink, Navigate } from 'react-router-dom';
import { passData } from './AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from 'firebase/auth';

const Header = () => {
    const {user,logOut,loginGoogle} = useContext(passData)
    console.log(user)
    const handleLogOut = () =>{
        logOut()
        .then(()=>{
         toast("❎ Succesfully LogOut")
        })
        .catch(err=> console.log(err))
    }

    const handleGoogle = () =>{
    const provider = new GoogleAuthProvider();
    loginGoogle(provider)
    .then(()=>{
        toast("👨‍🦱 Succesful Google LogIn")
    })
    .catch(err => console.log(err))
    }
    const dynamic_route = <>
    <li className='m-2'> <NavLink to={'/'}>Home</NavLink> </li>
    <li className='m-2'> <NavLink to={'/login'}>Login</NavLink> </li>
    <li className='m-2'> <NavLink to={'/register'}>Register</NavLink> </li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {dynamic_route}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xs md:text-xl">Game-Web</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {dynamic_route}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div className='flex justify-center items-center gap-1 md:gap-2'>
                         <p className='text-xs font-semibold'>{user.displayName}</p>
                         <button onClick={handleLogOut} className='btn btn-outline'>Logout</button>
                        </div> : <div className='flex flex-col md:flex-row justify-center items-center gap-2'>
                         <button onClick={handleGoogle} className='btn btn-outline btn-accent'><FaGoogle /> Google SignIn</button>
                         <button className='btn btn-outline btn-accent'> <Link to={'/login'}> SignIn Email </Link></button>
                        </div>
                    }
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Header;
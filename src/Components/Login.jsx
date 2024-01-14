import React, { useContext, useRef } from 'react';
import login1 from './Login_Animation.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { passData } from './AuthProvider';


const Login = () => {

    const { user,loginUser,resetPassword1 } = useContext(passData)
    const emailRef = useRef(null);

    const handleForgetPassword = ()=>{
     const email = emailRef.current.value;
     resetPassword1(email)
     .then(()=>{
        toast("📪 Please Check you mail")
     })
     .catch(err=>console.log(err))
    }

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
      
        if (!/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            toast("📧 Invalid Email Type")
            return;
        }

        else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
            toast("🔑 Invalid password type")
            return;
        }
        loginUser(email, password)
            .then(res => {
                toast("🧑‍💼 Login Succesfully")
                console.log(res.user)
            })
            .catch(() => {
                toast("❌ You Didnt SignIn Yet")
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <Lottie animationData={login1}></Lottie>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" ref={emailRef} name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" onClick={handleForgetPassword} className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <label className="label">
                                    <p className='text-xs'>Dont have any account?  <Link to={'/register'}> <span className='text-purple-600 font-semibold'>Register</span> </Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
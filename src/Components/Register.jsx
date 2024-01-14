import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import register from './Register.json'
import Lottie from 'lottie-react';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { passData } from './AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {

    const {createUser} = useContext(passData)
    const [img,setImg] = useState(null);

    const handleIMG = e =>{
        if(e.target.files[0])
        {
            setImg(e.target.files[0])
        }
    }

    
    const handleRegistration = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const photoUrl = img.name;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name,photoUrl,email,password);

        if(!/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(email)){
            toast("📧 Invalid Email Type")
            return;
        }

        else if(!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/.test(password)){
            toast("🔑 Invalid password type")
            return;
        }

        createUser(email,password)
        .then(result =>{
           console.log(result.user)
           updateProfile(result.user,{
            displayName : name,
            photoURL : photoUrl
           })
           .then(()=>{
           toast("👨‍💻 Succesfully Register an Account")
            
           })
           .catch(err=>console.log(err))
        })
        .catch(err=> console.log(err))
        
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                       <Lottie className='w-full h-[80vh]' animationData={register}></Lottie>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegistration} className="card-body">
                            <div className="form-control">
                            <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="file" name='photo' onChange={handleIMG} className="file-input file-input-bordered w-full max-w-xs" />
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                
                                <label className="label">
                                    <p className='text-xs'>Already have an account?  <Link to={'/login'}> <span className='text-purple-600 font-semibold'>Login</span> </Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
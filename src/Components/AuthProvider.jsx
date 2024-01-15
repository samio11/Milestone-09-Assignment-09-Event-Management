import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./FireBaseConfig";

export const passData = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [load,setLoad] = useState(true);

    

    const createUser = (email,password) =>{
        setLoad(true);
      return createUserWithEmailAndPassword(auth,email,password);
    }

    const loginUser = (email,password) =>{
        setLoad(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const loginGoogle = (provider) =>{
        setLoad(true);
        return signInWithPopup(auth,provider)
    }

    const resetPassword1 = (email) =>{
        setLoad(true);
        return sendPasswordResetEmail(auth,email)
    } 

    const logOut = () =>{
        setLoad(true);
        return signOut(auth)
    }

    useEffect(()=>{
        const unSuscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            setLoad(false);
        });
        return ()=>{
            unSuscribe();
        }
    },[])


    const info = {user,createUser,loginUser,logOut,loginGoogle,resetPassword1}
    return (
        <passData.Provider value={info}>
            {children}
        </passData.Provider>
    );
};

export default AuthProvider;
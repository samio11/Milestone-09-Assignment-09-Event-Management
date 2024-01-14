import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./FireBaseConfig";

export const passData = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);

    useEffect(()=>{
        const unSuscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
        });
        return ()=>{
            unSuscribe();
        }
    },[])

    const createUser = (email,password) =>{
      return createUserWithEmailAndPassword(auth,email,password);
    }

    const loginUser = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const loginGoogle = (provider) =>{
        return signInWithPopup(auth,provider)
    }

    const logOut = () =>{
        return signOut(auth)
    }


    const info = {user,createUser,loginUser,logOut,loginGoogle}
    return (
        <passData.Provider value={info}>
            {children}
        </passData.Provider>
    );
};

export default AuthProvider;
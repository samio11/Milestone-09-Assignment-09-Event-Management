import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "./FireBaseConfig";

export const passData = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);

    const createUser = (email,password) =>{
      return createUserWithEmailAndPassword(auth,email,password);
    }

    const loginUser = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }


    const info = {user,createUser,loginUser}
    return (
        <passData.Provider value={info}>
            {children}
        </passData.Provider>
    );
};

export default AuthProvider;
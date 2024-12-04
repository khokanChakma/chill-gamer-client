import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.confiq';
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    // const [loading,setLoading] =useState(true)
    console.log(user);
    const createNewUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const userLogin = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubcribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        })
        return () =>{
            unsubcribe()
        }
    },[])

    const userInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        userLogin,
    }

    return (<AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>);
};

export default AuthProvider;
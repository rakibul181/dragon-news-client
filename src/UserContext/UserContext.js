import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)
const UserContext = ({children}) => {
    const[user,setUser] = useState(null)
    const[loading, setLoading] = useState(true)
   

    const userSignin = (provider)=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    const userLogOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    const signInWithEmailPass = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email ,password)
    }
    const createUserByResister = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setLoading(false)
            setUser(currentUser)
            console.log('User on Onstate chane',currentUser);
        })

        return ()=>unsubscribe()
    }, [])
    const authInfo ={userSignin,loading,user,userLogOut,signInWithEmailPass,createUserByResister}
    return (
         <AuthContext.Provider value={authInfo}>
            {children}
         </AuthContext.Provider>
    );
};

export default UserContext;
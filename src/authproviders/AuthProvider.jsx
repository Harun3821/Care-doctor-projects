import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import {  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../fierbase/firebase.config"


export const  AuthContext = createContext()
const auth = getAuth(app)



const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const[loading, setLoading] = useState(true)

    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

     const singIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
     }

    useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentuser => {
            setUser(currentuser);
            console.log('current user', currentuser);
            setLoading(false);
        })
        return () =>{
            return unsubscribe();
        }
    },[])


    const authInfo = {
        user,
        loading,
        createUser,
        singIn

    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes={
    children:PropTypes.obj
}
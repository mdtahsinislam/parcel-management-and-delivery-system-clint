import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';





//google auth provider
const googleProvider = new GoogleAuthProvider();





const AuthProvider = ({children}) => {
  const [user,setUser]=useState(null);
  const [loading,setLoading]=useState(true);
    const createUser =(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }


 const signInWithGoogle=()=>{
    setLoading(true);
    return signInWithPopup(auth,googleProvider);
 }   
    const signIn =(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword (auth,email,password);
    }
const logOut=()=>{
    setLoading(true);
    return  signOut(auth);
}

useEffect(()=>{
const unSubscribe=onAuthStateChanged(auth,currentUser =>{
    setUser(currentUser);
    console.log('User in the auth state change',currentUser);
    setLoading(false);
})
return ()=>{
    unSubscribe();
}
},[])


    const authInfo={
        user,
        loading,
   createUser,
   signIn,
   logOut,
   signInWithGoogle
    }
    return (
       <AuthContext value={authInfo}>
         {children}
       </AuthContext>
    );
};

export default AuthProvider;
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import auth from "../firebase/firebase.init";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] =  useState(true);
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const profileUpdate = (displayName, photoURL) =>{
        setLoading(true)
        return updateProfile(auth.currentUser,{displayName, photoURL})
    }
    const logInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth);
    }
    useEffect(()=>{
     const unSubScribe = onAuthStateChanged(auth, currentUser =>{
            console.log('recently loged user', currentUser)
            setUser(currentUser);
            setLoading(false)
        });
        return () =>{
            unSubScribe();
        }
    },[])

    const regWithGoogle = (provider) =>{
       return signInWithPopup(auth, provider)
    }
    const authFuncs = {user, createUser, logInUser, logOut, regWithGoogle, profileUpdate, loading };
    return (
        <AuthContext.Provider value={authFuncs}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
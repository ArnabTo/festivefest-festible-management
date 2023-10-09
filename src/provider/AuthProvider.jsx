import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import auth from "../firebase/firebase.init";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const profileUpdate = (displayName, photoURL) =>{
        return updateProfile(auth.currentUser,{displayName, photoURL})
    }
    const logInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=>{
        return signOut(auth);
    }
    useEffect(()=>{
     const unSubScribe = onAuthStateChanged(auth, currentUser =>{
            console.log('recently loged user', currentUser)
            setUser(currentUser);
        });
        return () =>{
            unSubScribe();
        }
    },[])

    const regWithGoogle = (provider) =>{
       return signInWithPopup(auth, provider)
    }
    const authFuncs = {user, createUser, logInUser, logOut, regWithGoogle, profileUpdate };
    return (
        <AuthContext.Provider value={authFuncs}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
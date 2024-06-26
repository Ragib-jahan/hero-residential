import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firevase/firevase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const GoogleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const google = () => {
        setLoading(true)
        return signInWithPopup(auth, GoogleProvider)
    }
    const gitHub = () =>{
        return signInWithPopup(auth, gitHubProvider)
    }
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const register = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const update =(name, email, photo)=>{
        
       return updateProfile(auth.currentUser, {displayName: name, email: email, photoURL: photo}) 
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log("current state change is", currentUser)
            setLoading(false)
        })

        return () => {
            unSubscribe()
        }
    }, [])




    const authInfo = { user, login, register, google,logOut, update, loading, gitHub}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
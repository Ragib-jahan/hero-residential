import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../firevase/firevase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState()
    const GoogleProvider = new GoogleAuthProvider();

    const google = () =>{
      return signInWithPopup(auth, GoogleProvider)
    }
    const login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const register = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    


const authInfo = {user, login, register, google}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
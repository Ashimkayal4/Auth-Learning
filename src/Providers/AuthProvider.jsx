import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/Firebase.init";

export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    const provider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        
        return signInWithEmailAndPassword(auth, email, password);
    }

    const userSignOut = () => {
       
        return signOut(auth);
    }

    const signInWithGoogle = () => {
       return signInWithPopup(auth, provider);
    }

    useEffect(()=> {
      const remove=  onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                console.log(currentUser)
                setUser(currentUser)
                setLoading(false)
            }
            else {
                console.log('no user logged in')
                setUser(null)
            }
      })
        
        return () => {
            remove()
        }
    },[])



    const info = {
        createUser,
        signIn,
        user,
        userSignOut,
        loading,
        signInWithGoogle
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
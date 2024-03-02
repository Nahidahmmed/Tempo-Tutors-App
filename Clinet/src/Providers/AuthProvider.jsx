import React, { createContext, useEffect, useState } from 'react'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
// import app from '../firebase/firebase.config';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo2X23vm2fRVt11m6FS8fv1smLKhVcCoU",
  authDomain: "tempo-tutors-3d4b3.firebaseapp.com",
  projectId: "tempo-tutors-3d4b3",
  storageBucket: "tempo-tutors-3d4b3.appspot.com",
  messagingSenderId: "447466441253",
  appId: "1:447466441253:web:6d651469431ad464aa8dcc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const AuthContext = createContext(null);
export default function AuthProvider({children}) {
    const auth = getAuth(app);
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const  googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, { displayName: name, photoURL: photo });
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('currentUser', currentUser);
            setLoading(false)
        });
        return () => {
            return unsubscribe;
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile,
        googleSignIn
    };
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

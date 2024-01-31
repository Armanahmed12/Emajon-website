import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // create a new account
    const createNewAccount = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password);

    }
    //    log In function
    const loginUser = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password);
    };
    // log out the current user
    const logOutTheCurrentUser = () =>{

              return signOut(auth);
    }
    //  check and set whether there is a user no Not
    useEffect(() => {

        const unsubscribe = () => {

            onAuthStateChanged(auth, user => {

                 if(user){
                    setUser(user);
                    setIsLoading(false);
                 }else{
                    setUser(null);
                 }

            })

        };

        return () => {

            unsubscribe();
        }

    }, []);

    const userInfo = { user, isLoading, logOutTheCurrentUser, createNewAccount, loginUser};

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
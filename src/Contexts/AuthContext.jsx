import React, { useContext, useEffect, useState, createContext } from "react";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut } from "firebase/auth";
import { auth } from "../Firebase";

const AuthContext = createContext();


export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  //the signup state functionality
  async function signup(email, password) {
    return await createUserWithEmailAndPassword(auth, email, password).catch(
      function (error) {
        console.log(error);
      }
    );
  }
  //the Login state functionality
  async function login(email, password) {
    return await signInWithEmailAndPassword(auth, email, password).catch(
      function (error) {
        console.log(error);
      }
    );
  }
  //the Logout state functionality
  async function logout(email, password) {
    return await auth.signOut().catch(function (error) {
      console.log(error);
    });
  }
  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return unsubscribe
  }, []);


  const value = {
    currentUser,
    signup,
    login,
    logout,
   
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

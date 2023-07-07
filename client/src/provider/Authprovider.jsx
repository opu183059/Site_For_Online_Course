/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
export const Authcontext = createContext(null);
const auth = getAuth(app);
const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // create account
  const userRegistration = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // login account
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // sign out
  const userSignOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscrive = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscrive();
    };
  }, []);

  const firebaseData = {
    userRegistration,
    userSignOut,
    userLogin,
    user,
    loading,
  };
  return (
    <Authcontext.Provider value={firebaseData}>{children}</Authcontext.Provider>
  );
};

export default Authprovider;

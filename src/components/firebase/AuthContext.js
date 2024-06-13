import React, { createContext, useState, useEffect, useContext } from 'react';
import { auth } from './firebaseConfig'; 
import { onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const AuthContext = createContext({
  currentUser: null,
  loading: true,
  login: () => Promise.resolve(),
  register: () => Promise.resolve(),
  logout: () => Promise.resolve(),
});

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    // Cleanup function to unsubscribe when component unmounts
    return unsubscribe;
  }, []);

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      // Handle login error (e.g., display error message)
      console.error("Login error:", error);
      throw error; // Re-throw the error to be handled by the calling component
    }
  };

  const register = async (email, password) => {
    try {
      console.log("Creating new user: ", email)
      return await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      // Handle registration error (e.g., display error message)
      console.error("Registration error: ", error);
      throw error; // Re-throw the error to be handled by the calling component
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      // Handle logout error (e.g., display error message)
      console.error("Logout error:", error);
    }
  };

  const value = { currentUser, loading, login, register, logout };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children} 
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

import React, { createContext, useEffect, useReducer } from "react";
import {
  GoogleAuthProvider, // для авторизации через гугл
  signInWithPopup, // чтобы вышло модальное окно при входе
  onAuthStateChanged, //  чтобы понимать пользователь вошел или нет
  signOut, // чтобы выйти из системы
} from "firebase/auth";
import { auth } from "../firebase";
export const AuthContext = createContext();

const INIT_STATE = {
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHECK_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const AuthProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const googleProvider = new GoogleAuthProvider();

  const authWithGoogle = async () => {
    try {
      const response = await signInWithPopup(auth, googleProvider);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const checkUser = () => {
    onAuthStateChanged(auth, (user) => {
      let action = {
        type: "CHECK_USER",
        payload: user,
      };
      dispatch(action);
    });
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <AuthContext.Provider value={{ authWithGoogle, logout, user: state.user }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

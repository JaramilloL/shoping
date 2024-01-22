//? en este componente se manejaran los estados globales de la apicacions

import PropTypes from "prop-types";
import { UserContext } from "./UserContext";
import { useEffect, useReducer, useState } from "react";
import UserReducer from "./UserReducer";
import { auth } from "../firebase/firebase.js";

import {
  createUserWithEmailAndPassword, //creamos usuarios
  signInWithEmailAndPassword,     //logeamos al usuario
  signOut,                        //cerramos la secion
  onAuthStateChanged,             //vemos el estado del usuario en la pagina
  GoogleAuthProvider,             //accedemos con google
  signInWithPopup,                //crea una ventana para el inicio de sesion de google
} from "firebase/auth";

const UserState = ({ children }) => {
  //creamos el contexto para el paso de parametrso en la app
  const initialState = {
    isAuthenticated: false,
    user: null,
  };
  const [userData, setUserData] = useState(null)

  //creamos un estado para sber si el usuario esta totalmente logeado
  useEffect(()=>{
    onAuthStateChanged(auth, (users)=>{ 
        console.log(users)
        setUserData(users)
    })
  },[])

  //?Creamos las funciones para el inicio de sesion con email y password
  const registerUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  //acceso a la pagina home
  const loginAcces = () => {
    dispatch({ type: "login" });
  };
  const logoutAcces = () => {
    dispatch({ type: "logout" });
  };

  //?inicio de secion con correo y password
  const logIn = async (email, password) =>
    await signInWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth);

  const loginWithGoogle = ()=> {
    const userGoogle = new GoogleAuthProvider();
    return signInWithPopup(auth, userGoogle)
  }

  const [state, dispatch] = useReducer(UserReducer, initialState);

  return (
    <UserContext.Provider
      value={{
        state,
        dispatch,
        registerUser,
        loginAcces,
        logoutAcces,
        logIn,
        logout,
        userData,
        loginWithGoogle,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserState;

UserState.propTypes = {
  children: PropTypes.object,
};

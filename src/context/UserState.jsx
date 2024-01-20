//? en este componente se manejaran los estados globales de la apicacions

import PropTypes from 'prop-types'
import { UserContext } from './UserContext'
import { useReducer } from 'react'
import UserReducer from './UserReducer'
import { auth } from '../firebase/firebase'

import { createUserWithEmailAndPassword } from 'firebase/auth'

const UserState = ( { children } ) => { //creamos el contexto para el paso de parametrso en la app
    const initialState = {
        isAuthenticated: false,
        user: null,
    }

    //?Creamos las funciones para el inicio de sesion con email y password
    const registerUser = (email, password) =>
         createUserWithEmailAndPassword(auth, email, password)

    const [state, dispatch] = useReducer(UserReducer, initialState)

  return (
    <UserContext.Provider value={{
        state,
        dispatch,
        registerUser
    }}>
        { children }
    </UserContext.Provider>
  )
}

export default UserState

UserState.propTypes = {
    children: PropTypes.object
}
//? en este componente se manejaran los estados globales de la apicacions

import PropTypes from 'prop-types'
import { UserContext } from './UserContext'
import { useReducer } from 'react'
import UserReducer from './UserReducer'

const UserState = ( { children } ) => { //creamos el contexto para el paso de parametrso en la app
    const initialState = {
        isAuthenticated: false,
        user: null,
    }

    const [state, dispatch] = useReducer(UserReducer, initialState)
    
  return (
    <UserContext.Provider value={{
        state,
        dispatch
    }}>
        { children }
    </UserContext.Provider>
  )
}

export default UserState

UserState.propTypes = {
    children: PropTypes.object
}
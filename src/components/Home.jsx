import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { Navigate } from "react-router-dom"

const Home = () => {
  const { state, logout, logoutAcces, userData } = useContext(UserContext)

  const handleLogout =()=>{
    logout();
    logoutAcces()
  }
  return (
    <div>
      {
        state.isAuthenticated ? (
          <>
          <p>home</p>
          <p>{userData.email}</p>
          <button onClick={handleLogout}>Logout</button>
          </>
        ): (
          <Navigate to={'/login'}/>
        )
      }
    </div>
  )
}

export default Home
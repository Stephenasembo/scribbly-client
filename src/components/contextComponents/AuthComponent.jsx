import { useState } from "react"
import { AuthContext } from "../context/AuthContext"

export default function AuthComponent ({children}) {
  const [currentUser, setCurrentUser] = useState({})

  return (
    <AuthContext.Provider value={{currentUser, setCurrentUser}}>
      {children}
    </AuthContext.Provider>
  )
}
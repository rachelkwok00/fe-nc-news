import { createContext, useState } from "react";

export const UserContext = createContext()

export const UserProvider = ({children}) =>{
    const [signIn ,setSignIn] = useState(false);
    const [username ,setUsername] = useState("");
  return (
 <UserContext.Provider value = {{
    signInState: [signIn , setSignIn],
    usernameState: [username ,setUsername]
    }}>
    {children}
 </UserContext.Provider>
  )
}
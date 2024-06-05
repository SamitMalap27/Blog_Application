import { createContext, useState } from "react";

export const UserContext=createContext({})

export function UserContextProvier({children}){
    const [userInfo,setUserInfo]=useState({})
    return (
    <UserContext.Provider value={{userInfo,setUserInfo}}>
        {children}
    </UserContext.Provider>
    )
}
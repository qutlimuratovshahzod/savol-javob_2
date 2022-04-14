import { createContext, useContext } from "react";
import { useState } from "react";

const UseContext = createContext();
UserContext.displayName = "UserContext";

export const useCustomContext = () =>useContext(UserContext);
function UserContextProvider({ children }) {
    const initialUser = {
        name: '',
        age: '',
    };
    const [user, setUser] = userState(initialUser);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider
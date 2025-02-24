import { createContext, useState } from "react";
import { AuthContextType, UserType } from "../types";

const authContext = createContext<AuthContextType | null> (null);

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [user, setUser] = useState<UserType>(null);
    
    const login = async (email: string, password: string) => {
        
    }
}
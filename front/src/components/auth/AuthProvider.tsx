import { DecodedToken, decodeToken } from "@/lib/Token";
import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
    user: DecodedToken | null;
    setUser: (user: DecodedToken | null) => void;
  }

export const AuthContext = createContext<AuthContextType | null>(null);

// Provider with authentication context
export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<DecodedToken | null>(null);

    useEffect(() => {
        const token = localStorage.getItem("accessToken"); 
        if (token) {
            setUser(decodeToken(token));
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}

'use client'
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext<{ user: string; setUser: (user: string) => void } | null>(null);

// Provider with authentication context
export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState('');

    useEffect(() => {
        const token = localStorage.getItem("accessToken"); // Verify if access Token must contain the project name
        if (token) {
            setUser(JSON.parse(token));
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

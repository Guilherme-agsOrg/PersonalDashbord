import { UserAuthenticatedData } from "@/lib/Token";
import { getMe } from "@/services/authService";
import { createContext, useContext, useEffect, useState } from "react";
import { LoadingSpinner } from "../UI/LoadingSpinner";

interface AuthContextType {
    user: UserAuthenticatedData | null;
    setUser: (user: UserAuthenticatedData | null) => void;
    isLoading: boolean;
  }

export const AuthContext = createContext<AuthContextType | null>(null);

// Provider with authentication context
export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<UserAuthenticatedData | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        // Async function to check authentication
        const checkAuth = async () => {
            try {
                // Try to get user data.
                // the cookie will be sent automatically by axios.
                const userData = await getMe();
                setUser(userData);
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (error) {
                // if error is 401, user is not authenticated.
                setUser(null);
            } finally {
                // At the end of the process, loading ends.
                setIsLoading(false);
            }
        };
        checkAuth();
    }, []); //the empty array ensures this runs only once

    return (
        <AuthContext.Provider value={{ user, setUser, isLoading }}>
            {/* Show loading spinner while checking auth */}    
            {isLoading ? <LoadingSpinner /> : children} 
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return useContext(AuthContext);
}

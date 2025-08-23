import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "./AuthProvider";
import { UserAuthenticatedData } from "@/lib/Token";

// HOC or wrapper to protect pages
export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const { user } = useAuth() as { user: UserAuthenticatedData };
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push("/login");
        }
    }, [user, router]);

    if (!user) {
        return null; // or <LoadingSpinner /> if you want to display a loader
    }

    return <>{user && children}</>;
}

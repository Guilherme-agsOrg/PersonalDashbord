import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "./AuthProvider";

// HOC or wrapper to protect pages
export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const { user } = useAuth() as { user: string };
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push("/login");
        }
    }, [user, router]);

    return <>{user && children}</>;
}
